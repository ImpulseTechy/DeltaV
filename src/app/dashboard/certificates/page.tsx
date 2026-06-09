import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Download, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'My Certificates | Delta V',
}

export default async function CertificatesPage() {
  const supabase = createClient()
  // MOCK DATA FOR UI TESTING
  const session = { user: { id: 'mock' } }

  const certificates = [
    {
      id: 'mock-cert-1',
      cert_id: 'DV-2026-0042',
      issue_date: '2026-05-15',
      cohort_id: 'c1',
      cohorts: { course_id: 'esp32-iot-fundamentals' }
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl tracking-wide mb-2">
          My Certificates
        </h1>
        <p className="font-body text-[#A1A1AA] text-[15px]">
          View and download your earned certificates.
        </p>
      </div>

      {!certificates || certificates.length === 0 ? (
        <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-10 text-center flex flex-col items-center">
          <AwardIcon className="w-12 h-12 text-[#3F3F46] mb-4" />
          <p className="font-body text-white text-lg mb-2">No certificates yet</p>
          <p className="font-body text-[#A1A1AA] max-w-md mx-auto">
            Complete a course or workshop to earn your first Delta V certificate.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert: any) => {
            const courseId = cert.cohorts?.course_id
            const courseName = courseId?.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            
            return (
              <div key={cert.id} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-6 relative flex flex-col">
                <div className="absolute top-6 right-6 opacity-10 text-orange font-bold text-4xl">Δ</div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-orange text-lg font-bold">Δ</span>
                  <span className="font-mono text-[11px] text-orange tracking-widest uppercase">Certificate of Completion</span>
                </div>
                
                <h3 className="font-display font-semibold text-white text-xl sm:text-2xl mb-1 pr-12 line-clamp-2">
                  {courseName}
                </h3>
                
                <p className="font-body text-[#A1A1AA] text-[13px] mb-6">
                  Issued on {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                
                <div className="font-mono text-[11px] text-[#52525B] tracking-wider mb-6">
                  ID: {cert.cert_id}
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#3F3F46]">
                  <button className="flex-1 flex items-center justify-center gap-2 font-body font-medium transition-colors bg-transparent border border-[#3F3F46] text-white hover:bg-[#242424] text-sm py-2 px-4 rounded-md">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <Link 
                    href={`/verify/${cert.cert_id}`}
                    className="flex-1 flex items-center justify-center gap-2 font-body font-medium transition-colors bg-orange hover:bg-orange-light text-white text-sm py-2 px-4 rounded-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Verify →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
