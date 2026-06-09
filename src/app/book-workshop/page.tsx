import React, { Suspense } from 'react'
import { Check } from 'lucide-react'
import BookingForm from '@/components/forms/BookingForm'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = "Book a College Workshop"
  const description = "Submit a request to book a Delta V workshop for your engineering college. ECE college workshop India, robotics workshop engineering college."
  return {
    title: `${title} | Delta V`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/og?title=${encodeURIComponent(title)}&type=default` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?title=${encodeURIComponent(title)}&type=default`]
    }
  }
}

export default function BookWorkshopPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          
          {/* LEFT SIDE: Info Panel */}
          <div className="bg-bg-secondary rounded-lg p-8 border border-border h-fit sticky top-24 shadow-2xl">
            <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl leading-tight mb-4">
              Bring Delta V to Your College
            </h1>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-8">
              Submit a request below. Our team responds within 48 hours with a confirmed agenda and proposed date.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="font-body text-white text-sm leading-relaxed">
                  Equipment provided for most workshops — no procurement needed
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="font-body text-white text-sm leading-relaxed">
                  AICTE co-curricular activity eligible — counts for student records
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="font-body text-white text-sm leading-relaxed">
                  Confirmed at 40+ colleges across Maharashtra and Telangana
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-mono text-orange text-[11px] mb-6 tracking-widest uppercase">WHAT HAPPENS NEXT?</h3>
              <div className="relative border-l-2 border-border ml-2 space-y-6 pb-2">
                
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-orange rounded-full -left-[7px] top-1"></div>
                  <div className="font-body text-white text-sm font-medium">Step 1</div>
                  <div className="font-body text-text-muted text-[13px]">You submit this form</div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1"></div>
                  <div className="font-body text-white text-sm font-medium">Step 2</div>
                  <div className="font-body text-text-muted text-[13px]">We contact you within 48 hrs</div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1"></div>
                  <div className="font-body text-white text-sm font-medium">Step 3</div>
                  <div className="font-body text-text-muted text-[13px]">Date, agenda, logistics confirmed</div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Booking Form */}
          <div className="bg-bg-primary">
            <Suspense fallback={<div className="p-8 text-center text-text-muted font-body animate-pulse">Loading form...</div>}>
              <BookingForm />
            </Suspense>
          </div>

        </div>

      </div>
    </main>
  )
}
