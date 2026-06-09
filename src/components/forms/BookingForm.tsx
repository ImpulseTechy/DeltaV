'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Info } from 'lucide-react'
import Button from '@/components/ui/Button'
import { bookingSchema, BookingFormData, STATES, TOPICS } from '@/lib/validations/booking'
import { useSearchParams } from 'next/navigation'
import { fireBookingRequestSubmitted } from '@/components/analytics/Analytics'

export default function BookingForm() {
  const searchParams = useSearchParams()
  const initialTopic = searchParams?.get('topic') || ''
  
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submittedEmail, setSubmittedEmail] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      workshopTopic: initialTopic,
      venue: 'On-Campus',
    }
  })

  // Set topic if it comes from URL
  useEffect(() => {
    if (initialTopic) {
      // Validate if it's a known topic
      const isValid = TOPICS.some(t => t.value === initialTopic)
      if (isValid) {
        setValue('workshopTopic', initialTopic)
      }
    }
  }, [initialTopic, setValue])

  const preferredDateStr = watch('preferredDate')

  const onSubmit = async (data: BookingFormData) => {
    setSubmitError(null)
    
    // Additional validation for alternate date
    if (data.alternateDate && data.preferredDate) {
      const pDate = new Date(data.preferredDate)
      const aDate = new Date(data.alternateDate)
      if (aDate <= pDate) {
        setSubmitError('Alternate date must be after preferred date')
        return
      }
    }

    try {
      const res = await fetch('/api/bookings/workshop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Failed to submit booking')
      }

      setSubmittedEmail(data.officialEmail)
      setIsSuccess(true)
      
      // Fire analytics event
      fireBookingRequestSubmitted(data.workshopTopic, data.collegeName)
      
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err: any) {
      setSubmitError(err.message)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-bg-secondary rounded-lg border border-border h-full min-h-[500px]">
        <CheckCircle2 className="w-16 h-16 text-[#22c55e] mb-6" />
        <h2 className="font-display font-bold text-white text-4xl mb-4">Request Received!</h2>
        <p className="font-body text-text-secondary text-lg max-w-md mx-auto mb-8 leading-relaxed">
          We've sent a confirmation to <span className="text-white">{submittedEmail}</span>. Our team will contact you within 48 hours with next steps.
        </p>
        <Button 
          variant="ghost" 
          onClick={() => {
            setIsSuccess(false)
            setValue('officialEmail', '')
            setValue('contactName', '')
            setValue('whatsappNumber', '')
          }}
        >
          Book Another Workshop
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-bg-primary">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {submitError && (
          <div className="p-4 rounded border border-red-500/50 bg-red-500/10 text-red-200 font-body text-sm">
            {submitError}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Name */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Contact Name*</label>
            <input 
              {...register('contactName')} 
              placeholder="Prof. Meena Sharma"
              className={`w-full bg-bg-secondary border ${errors.contactName ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.contactName && <p className="text-red-500 text-xs font-body">{errors.contactName.message}</p>}
          </div>

          {/* Designation */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Designation*</label>
            <select 
              {...register('designation')}
              className={`w-full bg-bg-secondary border ${errors.designation ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange appearance-none`}
            >
              <option value="">Select Designation</option>
              <option value="TPO">TPO</option>
              <option value="Faculty Advisor">Faculty Advisor</option>
              <option value="Student Club Secretary">Student Club Secretary</option>
              <option value="HOD">HOD</option>
              <option value="Other">Other</option>
            </select>
            {errors.designation && <p className="text-red-500 text-xs font-body">{errors.designation.message}</p>}
          </div>

          {/* College Name */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">College Name*</label>
            <input 
              {...register('collegeName')} 
              placeholder="Full college name"
              className={`w-full bg-bg-secondary border ${errors.collegeName ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.collegeName && <p className="text-red-500 text-xs font-body">{errors.collegeName.message}</p>}
          </div>

          {/* College City */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">College City*</label>
            <input 
              {...register('collegeCity')} 
              placeholder="City"
              className={`w-full bg-bg-secondary border ${errors.collegeCity ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.collegeCity && <p className="text-red-500 text-xs font-body">{errors.collegeCity.message}</p>}
          </div>

          {/* State */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">State*</label>
            <select 
              {...register('collegeState')}
              className={`w-full bg-bg-secondary border ${errors.collegeState ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange appearance-none`}
            >
              <option value="">Select State</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.collegeState && <p className="text-red-500 text-xs font-body">{errors.collegeState.message}</p>}
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Workshop Topic*</label>
            <select 
              {...register('workshopTopic')}
              className={`w-full bg-bg-secondary border ${errors.workshopTopic ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange appearance-none`}
            >
              <option value="">Select Topic</option>
              {TOPICS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            {errors.workshopTopic && <p className="text-red-500 text-xs font-body">{errors.workshopTopic.message}</p>}
          </div>

          {/* Official Email */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Official Email*</label>
            <input 
              type="email"
              {...register('officialEmail')} 
              placeholder="yourname@college.edu.in"
              className={`w-full bg-bg-secondary border ${errors.officialEmail ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.officialEmail && <p className="text-red-500 text-xs font-body">{errors.officialEmail.message}</p>}
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">WhatsApp Number*</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-bg-tertiary border border-r-0 border-border text-text-secondary text-sm rounded-l">
                +91
              </span>
              <input 
                type="tel"
                {...register('whatsappNumber')} 
                placeholder="10 digit number"
                className={`w-full bg-bg-secondary border ${errors.whatsappNumber ? 'border-red-500' : 'border-border'} rounded-r px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
              />
            </div>
            {errors.whatsappNumber && <p className="text-red-500 text-xs font-body">{errors.whatsappNumber.message}</p>}
          </div>

          {/* Preferred Date */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Preferred Date* (min 14 days out)</label>
            <input 
              type="date"
              {...register('preferredDate')} 
              className={`w-full bg-bg-secondary border ${errors.preferredDate ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.preferredDate && <p className="text-red-500 text-xs font-body">{errors.preferredDate.message}</p>}
          </div>

          {/* Alternate Date */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Alternate Date (Optional)</label>
            <input 
              type="date"
              {...register('alternateDate')} 
              className={`w-full bg-bg-secondary border ${errors.alternateDate ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange`}
            />
            {errors.alternateDate && <p className="text-red-500 text-xs font-body">{errors.alternateDate.message}</p>}
          </div>

          {/* Expected Students */}
          <div className="space-y-2">
            <label className="text-sm font-body text-text-secondary">Expected Students*</label>
            <select 
              {...register('expectedStudents')}
              className={`w-full bg-bg-secondary border ${errors.expectedStudents ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange appearance-none`}
            >
              <option value="">Select Count</option>
              <option value="Under 30">Under 30</option>
              <option value="30–60">30–60</option>
              <option value="60–100">60–100</option>
              <option value="100+">100+</option>
            </select>
            {errors.expectedStudents && <p className="text-red-500 text-xs font-body">{errors.expectedStudents.message}</p>}
          </div>

          {/* Venue */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-body text-text-secondary mb-2 block">Venue*</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="On-Campus" 
                  {...register('venue')} 
                  className="w-4 h-4 text-orange bg-bg-tertiary border-border focus:ring-orange/50 focus:ring-2"
                />
                <span className="text-white font-body text-sm">On-Campus</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="Online" 
                  {...register('venue')} 
                  className="w-4 h-4 text-orange bg-bg-tertiary border-border focus:ring-orange/50 focus:ring-2"
                />
                <span className="text-white font-body text-sm">Online</span>
              </label>
            </div>
            {errors.venue && <p className="text-red-500 text-xs font-body">{errors.venue.message}</p>}
          </div>

          {/* Notes */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-body text-text-secondary">Additional Notes (Optional)</label>
            <textarea 
              {...register('additionalNotes')} 
              rows={4}
              placeholder="Any specific topics, student background, constraints..."
              className={`w-full bg-bg-secondary border ${errors.additionalNotes ? 'border-red-500' : 'border-border'} rounded px-4 py-3 text-white font-body focus:outline-none focus:border-orange resize-none`}
            />
            {errors.additionalNotes && <p className="text-red-500 text-xs font-body">{errors.additionalNotes.message}</p>}
          </div>

          {/* Referral */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-body text-text-secondary">How did you hear about us?*</label>
            <select 
              {...register('referralSource')}
              className={`w-full bg-bg-secondary border ${errors.referralSource ? 'border-red-500' : 'border-border'} rounded px-4 py-2.5 text-white font-body focus:outline-none focus:border-orange appearance-none`}
            >
              <option value="">Select option</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referred by college">Referred by college</option>
              <option value="Google Search">Google Search</option>
              <option value="Other">Other</option>
            </select>
            {errors.referralSource && <p className="text-red-500 text-xs font-body">{errors.referralSource.message}</p>}
          </div>

        </div>

        <div className="pt-6 border-t border-border">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Submit Booking Request →
          </Button>

          <div className="mt-4 flex items-center justify-center gap-2 text-text-muted">
            <Info className="w-4 h-4" />
            <span className="font-body text-[12px]">No payment required at this stage. Our team will contact you to confirm details.</span>
          </div>
        </div>
      </form>
    </div>
  )
}
