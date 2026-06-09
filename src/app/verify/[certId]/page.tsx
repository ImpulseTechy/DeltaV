import { createClient } from '@/lib/supabase/server'
import { ShieldCheck, ShieldX } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ certId: string }>
}

export async function generateMetadata({ params }: Props) {
  const { certId } = await params
  return {
    title: `Verify Certificate ${certId} | Delta V`,
    description: 'Verify the authenticity of a Delta V certificate of completion.',
  }
}

export default async function VerifyCertificatePage({ params }: Props) {
  const { certId } = await params
  const supabase = createClient()

  // REAL DB QUERY (Commented out for mock testing)
  /*
  const { data: certificate, error } = await supabase
    .from('certificates')
    .select(`
      cert_id,
      issue_date,
      revoked,
      profiles:user_id ( full_name ),
      cohorts (
        start_date, end_date,
        courses ( title )
      )
    `)
    .eq('cert_id', certId)
    .single()
  */

  // MOCK LOGIC FOR TESTING
  let certificate: any = null

  if (certId === 'DV-MISSING') {
    certificate = null
  } else if (certId === 'DV-REVOKED') {
    certificate = { revoked: true }
  } else {
    certificate = {
      cert_id: certId,
      issue_date: '2026-06-08T10:00:00Z',
      revoked: false,
      profiles: { full_name: 'Aarav Sharma' },
      cohorts: {
        start_date: '2026-07-14',
        end_date: '2026-08-25',
        courses: { title: 'ESP32 IoT Fundamentals' }
      }
    }
  }

  // State 3: Not Found
  if (!certificate) {
    return (
      <div className="max-w-[520px] mx-auto py-20 px-4 text-center">
        <ShieldX className="w-14 h-14 text-[#52525B] mx-auto mb-6" />
        <h1 className="font-heading font-semibold text-[2rem] text-white mb-3">Certificate Not Found</h1>
        <p className="font-body text-[#A1A1AA] mb-8 leading-relaxed">
          No certificate exists with this ID. Please check the ID and try again.
        </p>
        <a 
          href="mailto:hello@deltav.in"
          className="inline-flex items-center justify-center font-body text-sm font-medium text-[#A1A1AA] hover:text-white border border-[#3F3F46] rounded-lg px-6 py-3 hover:bg-[#1A1A1A] transition-colors"
        >
          Contact Delta V
        </a>
      </div>
    )
  }

  // State 2: Revoked
  if (certificate.revoked) {
    return (
      <div className="max-w-[520px] mx-auto py-20 px-4 text-center">
        <ShieldX className="w-14 h-14 text-red-500 mx-auto mb-6" />
        <h1 className="font-heading font-semibold text-[2rem] text-red-500 mb-3">Certificate Revoked</h1>
        <p className="font-body text-[#A1A1AA] leading-relaxed">
          This certificate has been revoked. It is no longer valid.
        </p>
      </div>
    )
  }

  // State 1: Valid
  const startDate = new Date(certificate.cohorts.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const endDate = new Date(certificate.cohorts.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div className="max-w-[520px] mx-auto py-20 px-4 text-center">
      <ShieldCheck className="w-14 h-14 text-green-500 mx-auto mb-6" />
      <h1 className="font-heading font-semibold text-[2rem] text-green-500 mb-8 tracking-wide">
        Certificate Verified
      </h1>

      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-8 text-left space-y-4 mb-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3F3F46] pb-4">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Student Name</span>
          <span className="font-body font-medium text-white text-right">{certificate.profiles.full_name}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3F3F46] pb-4">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Course Completed</span>
          <span className="font-body text-white text-right">{certificate.cohorts.courses.title}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3F3F46] pb-4">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Cohort</span>
          <span className="font-body text-[#A1A1AA] text-right">{startDate} – {endDate}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3F3F46] pb-4">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Issued by</span>
          <span className="font-body text-[#A1A1AA] text-right">Delta V</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3F3F46] pb-4">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Certificate ID</span>
          <span className="font-mono text-brand-primary text-right tracking-wider">{certificate.cert_id}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2">
          <span className="font-body text-sm text-[#A1A1AA] mb-1 sm:mb-0">Issued on</span>
          <span className="font-body text-[#A1A1AA] text-right">
            {new Date(certificate.issue_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

      <p className="font-body text-xs text-[#52525B]">
        This certificate was issued by Delta V, an Orbital Research Lab brand.
      </p>
    </div>
  )
}
