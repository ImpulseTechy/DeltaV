-- supabase_schema.sql
-- Delta V Platform Database Schema Configuration
-- Paste this script into the Supabase SQL Editor to set up all tables, relations, triggers, and Row Level Security.

-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- Drop existing tables (use cascade to clean up dependencies safely during testing/setup)
drop table if exists public.rate_limits cascade;
drop table if exists public.workshop_bookings cascade;
drop table if exists public.certificates cascade;
drop table if exists public.enrollments cascade;
drop table if exists public.payments cascade;
drop table if exists public.cohorts cascade;
drop table if exists public.courses cascade;
drop table if exists public.profiles cascade;

-- Drop existing trigger/functions if they exist
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

---------------------------------------------------------
-- 1. PROFILES TABLE (Linked to Supabase Auth users)
---------------------------------------------------------
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
    name text,
    full_name text,
    email text,
    phone text,
    role text default 'student' check (role in ('student', 'admin')),
    college text,
    year text,
    branch text,
    onboarded boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Profiles Policies
create policy "Allow public read-access for profiles" 
    on public.profiles for select 
    using (true);

create policy "Allow users to update their own profile" 
    on public.profiles for update 
    using (auth.uid() = id);

create policy "Allow users to insert their own profile" 
    on public.profiles for insert 
    with check (auth.uid() = id);

create policy "Allow users to upsert their own profile" 
    on public.profiles for all
    using (auth.uid() = id);

-- Trigger to automatically create a profile record when a user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.profiles (id, email, name, full_name, role, onboarded)
    values (
        new.id,
        new.email,
        coalesce(new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'full_name', ''),
        coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
        'student',
        false
    );
    return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();


---------------------------------------------------------
-- 2. COURSES TABLE
---------------------------------------------------------
create table public.courses (
    id text primary key, -- Slug identifier e.g. 'esp32-iot-fundamentals'
    title text not null,
    description text,
    badge text,
    price integer not null,
    original_price integer,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for courses
alter table public.courses enable row level security;

-- Courses Policies
create policy "Allow public read-access for courses" 
    on public.courses for select 
    using (true);

create policy "Allow admins full control of courses" 
    on public.courses for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );


---------------------------------------------------------
-- 3. COHORTS TABLE (Sub-cohorts inside courses)
---------------------------------------------------------
create table public.cohorts (
    id text primary key, -- e.g. unique batch identifier
    course_id text references public.courses(id) on delete cascade not null,
    start_date date not null,
    end_date date not null,
    price integer not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for cohorts
alter table public.cohorts enable row level security;

-- Cohorts Policies
create policy "Allow public read-access for cohorts" 
    on public.cohorts for select 
    using (true);

create policy "Allow admins full control of cohorts" 
    on public.cohorts for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );


---------------------------------------------------------
-- 4. PAYMENTS TABLE (Razorpay transactions log)
---------------------------------------------------------
create table public.payments (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references public.profiles(id) on delete set null,
    cohort_id text references public.cohorts(id) on delete set null,
    razorpay_order_id text unique not null,
    razorpay_payment_id text,
    amount integer not null, -- amount in INR (fully converted from paise)
    status text default 'created' check (status in ('created', 'captured', 'failed', 'refunded')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for payments
alter table public.payments enable row level security;

-- Payments Policies
create policy "Allow users to view their own payments" 
    on public.payments for select 
    using (auth.uid() = user_id);

create policy "Allow admins full control of payments" 
    on public.payments for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );

create policy "Allow public inserts (for checkouts)" 
    on public.payments for insert 
    with check (auth.uid() = user_id);

create policy "Allow service role updates"
    on public.payments for update
    using (true);


---------------------------------------------------------
-- 5. ENROLLMENTS TABLE
---------------------------------------------------------
create table public.enrollments (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    cohort_id text references public.cohorts(id) on delete cascade not null,
    payment_id uuid references public.payments(id) on delete set null,
    status text default 'active' check (status in ('active', 'suspended', 'completed')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint unique_user_cohort unique (user_id, cohort_id)
);

-- Enable RLS for enrollments
alter table public.enrollments enable row level security;

-- Enrollments Policies
create policy "Allow users to read their own enrollments" 
    on public.enrollments for select 
    using (auth.uid() = user_id);

create policy "Allow admins full control of enrollments" 
    on public.enrollments for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );

create policy "Allow insert on checkout (webhook service-level updates)"
    on public.enrollments for insert
    with check (true);


---------------------------------------------------------
-- 6. CERTIFICATES TABLE
---------------------------------------------------------
create table public.certificates (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    enrollment_id uuid references public.enrollments(id) on delete cascade not null,
    cohort_id text references public.cohorts(id) on delete cascade not null,
    cert_id text unique not null, -- formatted DV-YYYY-[RANDOM]
    issue_date timestamp with time zone default timezone('utc'::text, now()) not null,
    revoked boolean default false not null,
    pdf_url text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for certificates
alter table public.certificates enable row level security;

-- Certificates Policies
create policy "Allow public read-access for certificates (for public verification link)" 
    on public.certificates for select 
    using (true);

create policy "Allow admins full control of certificates" 
    on public.certificates for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );


---------------------------------------------------------
-- 7. WORKSHOP BOOKINGS TABLE
---------------------------------------------------------
create table public.workshop_bookings (
    id uuid default gen_random_uuid() primary key,
    contact_name text not null,
    designation text not null,
    college_name text not null,
    college_city text not null,
    college_state text not null,
    official_email text not null,
    whatsapp_number text not null,
    workshop_topic text not null,
    preferred_date date not null,
    alternate_date date,
    expected_students text not null,
    venue text not null check (venue in ('On-Campus', 'Online')),
    additional_notes text,
    referral_source text not null,
    status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
    ip_address text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for workshop bookings
alter table public.workshop_bookings enable row level security;

-- Workshop Bookings Policies
create policy "Allow public inserts for bookings" 
    on public.workshop_bookings for insert 
    with check (true);

create policy "Allow admins full control of bookings" 
    on public.workshop_bookings for all 
    using (
        exists (
            select 1 from public.profiles 
            where profiles.id = auth.uid() and profiles.role = 'admin'
        )
    );


---------------------------------------------------------
-- 8. RATE LIMITS TABLE
---------------------------------------------------------
create table public.rate_limits (
    id uuid default gen_random_uuid() primary key,
    ip_address text not null,
    endpoint text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for rate limits
alter table public.rate_limits enable row level security;

-- Rate Limits Policies
create policy "Allow public inserts for rate limit logs" 
    on public.rate_limits for insert 
    with check (true);

create policy "Allow public read access for rate limit checks" 
    on public.rate_limits for select 
    using (true);


---------------------------------------------------------
-- 9. SEED DATA FOR TESTING (Optional)
---------------------------------------------------------
-- Seed default courses
insert into public.courses (id, title, description, badge, price, original_price)
values 
('esp32-iot-fundamentals', 'IoT with ESP32 — From Zero to Deployed Product', 'Build 3 real IoT projects. Understand every line of code. Deploy to cloud.', 'ECE / IoT', 1999, 4999),
('embedded-systems-rtos', 'Embedded Systems & RTOS', 'Master FreeRTOS and microcontrollers at scale.', 'ECE / Embedded', 2499, 5999),
('plc-industrial-automation', 'PLC & Industrial Automation', 'Siemens TIA Portal, ladder logic, motor control.', 'EEE / PLC', 1999, 4999)
on conflict (id) do nothing;

-- Seed default cohorts
insert into public.cohorts (id, course_id, start_date, end_date, price)
values 
('esp32-july-2026', 'esp32-iot-fundamentals', '2026-07-14', '2026-08-25', 1999),
('rtos-august-2026', 'embedded-systems-rtos', '2026-08-04', '2026-09-29', 2499),
('plc-august-2026', 'plc-industrial-automation', '2026-08-18', '2026-09-22', 1999)
on conflict (id) do nothing;
