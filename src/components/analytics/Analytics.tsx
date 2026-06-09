'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

// Type declarations for window object
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    dataLayer: any[]
    _fbq: any
  }
}

// Custom Event Helpers
export const fireEnrollmentCompleted = (courseSlug: string, amount: number) => {
  if (typeof window !== 'undefined') {
    // GA4
    if (window.gtag) {
      window.gtag('event', 'enrollment_completed', {
        course_slug: courseSlug,
        value: amount,
        currency: 'INR'
      })
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: courseSlug,
        value: amount,
        currency: 'INR'
      })
    }
  }
}

export const fireBookingRequestSubmitted = (topic: string, college: string) => {
  if (typeof window !== 'undefined') {
    // GA4
    if (window.gtag) {
      window.gtag('event', 'booking_request_submitted', {
        topic: topic,
        college: college
      })
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_category: 'Workshop Booking',
        content_name: topic
      })
    }
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track pageviews on route change
  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      const url = pathname + searchParams.toString()
      
      // GA4 Pageview
      if (GA_MEASUREMENT_ID && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        })
      }
      
      // Meta Pixel Pageview
      if (META_PIXEL_ID && window.fbq) {
        window.fbq('track', 'PageView')
      }
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  )
}
