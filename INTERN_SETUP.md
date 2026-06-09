# 🚀 Delta V — Intern Onboarding & Handover Guide

This guide covers all third-party integrations, database migrations, configuration parameters, and production deployment checklists required to make the **DeltaV** application fully functional.

---

## 📋 Table of Contents
1. [Supabase Configuration (Database & Authentication)](#1-supabase-configuration-database--authentication)
2. [Razorpay Integration (Payments & Webhooks)](#2-razorpay-integration-payments--webhooks)
3. [Resend Integration (Transactional Emails)](#3-resend-integration-transactional-emails)
4. [Marketing & Analytics Configurations](#4-marketing--analytics-configurations)
5. [Environment Variables Setup (`.env.local`)](#5-environment-variables-setup-envlocal)
6. [Pre-Launch Verification Checklist](#6-pre-launch-verification-checklist)

---

## 1. Supabase Configuration (Database & Authentication)

Supabase handles user records, auth sessions, access control roles (admin vs. student), and core transactional tables.

### A. SQL Schema Setup
Create all tables, relationship constraints, indexes, and triggers by running the [supabase_schema.sql](file:///Users/vanshagarwal/DeltaV/supabase_schema.sql) script:
1. Open the [Supabase Dashboard](https://supabase.com).
2. Go to **SQL Editor** > **New Query**.
3. Paste the contents of the `supabase_schema.sql` file and click **Run**.

This automatically configures:
*   `profiles`: Custom table that links to `auth.users` via a Postgres trigger (`on_auth_user_created`), keeping names, branch, and role synchronized.
*   `courses` & `cohorts`: Product catalogue and dynamic batches.
*   `enrollments`: Bridges user accounts to courses after verification.
*   `payments`: Tracks transaction statuses.
*   `certificates`: Verifiable credentials with secure serial IDs.
*   `workshop_bookings`: Holds physical campus requests.
*   `rate_limits`: Protects request routes against bots.

### B. Row Level Security (RLS)
The SQL schema enables Row Level Security (RLS) policies to protect databases:
*   **Profiles**: Public read access is enabled so certificate verifiers can query student names, but update/upsert privileges are restricted to the owner of that user ID (`auth.uid() = id`).
*   **Admin Access**: Routes prefixed with `/admin` check if the authenticated user has `profiles.role = 'admin'`. Only admins can select, insert, or delete cohorts, courses, and certificates.

### C. Authentication Providers Setup
Indian students generally prefer passwordless OTP logins:
1. Navigate to **Authentication** > **Providers** in Supabase.
2. Enable the **Email** provider.
3. Toggle **Enable Email OTP** or **Magic Link** to **ON**.
4. (Optional) Enable **Google OAuth** under the providers list to support Google Sign-In using credentials created in Google Developer Console. Set redirect URL to `https://<your-domain>/auth/callback`.

---

## 2. Razorpay Integration (Payments & Webhooks)

Razorpay manages checkout processing and course enrollment conversions.

### A. Environment Variable Keys
Get credentials from the [Razorpay Dashboard](https://dashboard.razorpay.com) under **Settings** > **API Keys**:
*   `NEXT_PUBLIC_RAZORPAY_KEY_ID`: Client key initialized inside checkout modals.
*   `RAZORPAY_KEY_SECRET`: Secret key used in the backend to communicate with Razorpay.

### B. Webhook Setup
To automate enrollments when payments are successful, set up a webhook:
1. In the Razorpay Dashboard, go to **Settings** > **Webhooks** > **Add New Webhook**.
2. Set **Webhook URL** to:
   `https://<yourdomain.com>/api/webhooks/razorpay` (or your local tunneling URL e.g., ngrok for local testing).
3. Set **Secret** to a unique, random string (e.g. `dv_webhook_secret_xyz`). Configure this value as `RAZORPAY_WEBHOOK_SECRET` in your environment.
4. Select the **Event**: `payment.captured`.
5. Click **Save**.

---

## 3. Resend Integration (Transactional Emails)

Resend handles sending transaction receipts, onboarding confirmations, and booking updates.

1. Create a free account at [resend.com](https://resend.com).
2. Go to **Domains** > **Add Domain** and verify your domain (e.g., `deltav.in`) by adding the generated MX, TXT, and SPF records to your domain name registrar (GoDaddy, Namecheap, etc.).
3. Go to **API Keys** > **Create API Key**.
4. Save the key as `RESEND_API_KEY` in your environment.
5. In production, update the sender address in the webhook file ([route.ts](file:///Users/vanshagarwal/DeltaV/src/app/api/webhooks/razorpay/route.ts#L97)) to matching verified domains (e.g. `hello@deltav.in`).

---

## 4. Marketing & Analytics Configurations

### A. Google Analytics 4 (GA4)
*   Create a GA4 property on the Google Analytics console.
*   Find your Web Stream **Measurement ID** (format: `G-XXXXXXXXXX`).
*   Save it to `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

### B. Meta Pixel
*   Go to Facebook Business Manager > Events Manager.
*   Create a Meta Pixel and grab the 15-digit **Pixel ID**.
*   Save it to `NEXT_PUBLIC_META_PIXEL_ID`.

---

## 5. Environment Variables Setup (`.env.local`)

Instruct interns to create a `.env.local` file in the project root by copying the template:

```bash
cp .env.example .env.local
```

Open `.env.local` and configure the values:

```env
# 1. SUPABASE
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...

# 2. RAZORPAY
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=abcd1234...
RAZORPAY_WEBHOOK_SECRET=dv_webhook_secret_xyz

# 3. RESEND (EMAILS)
RESEND_API_KEY=re_123456789...

# 4. ANALYTICS (Optional for Local Dev)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345

# 5. APP URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 6. Pre-Launch Verification Checklist

Prior to launching live in production, interns should run through these checks:

- [ ] **Database Setup**: Execute `supabase_schema.sql` and verify that the `profiles`, `courses`, `cohorts`, `enrollments`, `payments`, `workshop_bookings`, and `certificates` tables exist.
- [ ] **Trigger Verification**: Sign up a test user on the auth page and verify that a matching record is created in the `profiles` table.
- [ ] **Admin Level Checks**: Set one test user's role to `'admin'` manually in the `profiles` table and check if `/admin` pages load without redirecting.
- [ ] **Test Transaction Checkout**: Run the checkout flow in test mode, complete a payment, and confirm that:
  - The payment record status is updated to `'captured'`.
  - An enrollment record is created.
  - A confirmation email is sent via Resend.
- [ ] **Certificate Issuance**: Issue a test certificate via `/api/admin/certificates/issue`, download the PDF, and verify it renders correctly without overlapping fields.
- [ ] **Certificate Verification**: Check if the public page `/verify/[certId]` displays the certificate info.
- [ ] **SEO Checks**: Confirm meta titles, descriptions, and OpenGraph tags render correctly.
- [ ] **Custom SMTP Configuration**: In the Supabase dashboard under **Settings** > **Auth**, change SMTP settings to use Resend's custom endpoint (`smtp.resend.com`) to prevent OTP emails from landing in spam folders.
