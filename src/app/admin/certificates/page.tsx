'use client'

import React, { useState } from 'react'
import { Download, Ban, Plus, X } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { useToast } from '@/components/ui/Toast'

type Certificate = {
  id: string
  student_name: string
  course_name: string
  issue_date: string
  cert_id: string
  revoked: boolean
}

const MOCK_CERTIFICATES: Certificate[] = [
  { id: '1', student_name: 'Aarav Sharma', course_name: 'ESP32 IoT Fundamentals', issue_date: '2026-06-08', cert_id: 'DV-2026-1042', revoked: false },
  { id: '2', student_name: 'Priya Patel', course_name: 'PLC Automation', issue_date: '2026-05-15', cert_id: 'DV-2026-0921', revoked: false },
  { id: '3', student_name: 'Rohan Gupta', course_name: 'Embedded Linux', issue_date: '2026-04-10', cert_id: 'DV-2026-0314', revoked: true },
]

export default function CertificatesManagerPage() {
  const [certificates, setCertificates] = useState<Certificate[]>(MOCK_CERTIFICATES)
  const [showIssueModal, setShowIssueModal] = useState(false)
  const [revokeId, setRevokeId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedEnrollment, setSelectedEnrollment] = useState('')
  
  const { toast } = useToast()

  const handleIssueCertificate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedEnrollment) return
    
    setIsLoading(true)
    try {
      const res = await fetch('/api/admin/certificates/issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enrollmentId: selectedEnrollment })
      })
      if (!res.ok) throw new Error('Failed to issue certificate')
      
      const data = await res.json()
      
      // Update UI with mocked cert for demonstration
      setCertificates([{
        id: data.certificate.id,
        student_name: 'Selected Student', // In reality, fetch from API
        course_name: 'Selected Course',
        issue_date: data.certificate.issue_date,
        cert_id: data.certificate.cert_id,
        revoked: false
      }, ...certificates])
      
      toast(`Certificate ${data.certificate.cert_id} issued successfully`, 'success')
      setShowIssueModal(false)
      setSelectedEnrollment('')
    } catch (err: any) {
      toast(err.message || 'Error issuing certificate', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRevoke = async (id: string) => {
    setIsLoading(true)
    try {
      // In a real app, call PATCH /api/admin/certificates/[id]/revoke
      // Mocking successful response:
      setTimeout(() => {
        setCertificates(prev => prev.map(c => c.id === id ? { ...c, revoked: true } : c))
        toast('Certificate revoked successfully', 'success')
        setRevokeId(null)
        setIsLoading(false)
      }, 500)
    } catch (err: any) {
      toast('Error revoking certificate', 'error')
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading font-semibold text-3xl text-white">Certificate Manager</h1>
          <p className="font-body text-[#A1A1AA] mt-1">Issue and manage student credentials</p>
        </div>
        <button 
          onClick={() => setShowIssueModal(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded-lg font-body text-sm font-bold flex items-center gap-2 hover:bg-[#E66000] transition-colors"
        >
          <Plus className="w-4 h-4" /> Issue Certificate
        </button>
      </div>

      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-[#121212] text-[#A1A1AA]">
              <tr>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Student</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Course</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Issued Date</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Cert ID</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3F3F46]">
              {certificates.map((row) => (
                <tr key={row.id} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{row.student_name}</td>
                  <td className="px-6 py-4 text-[#D4D4D8]">{row.course_name}</td>
                  <td className="px-6 py-4 text-[#A1A1AA]">{new Date(row.issue_date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-white font-mono text-xs tracking-wider">{row.cert_id}</td>
                  <td className="px-6 py-4">
                    <Badge variant={row.revoked ? 'destructive' : 'success'}>
                      {row.revoked ? 'REVOKED' : 'VALID'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <button 
                      className="p-2 text-[#A1A1AA] hover:text-white bg-[#27272A] hover:bg-[#3F3F46] rounded transition-colors disabled:opacity-50"
                      title="Download PDF"
                      disabled={row.revoked}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    {!row.revoked && (
                      <button 
                        onClick={() => setRevokeId(row.id)}
                        className="p-2 text-red-500 hover:text-white bg-red-500/10 hover:bg-red-600 rounded transition-colors"
                        title="Revoke Certificate"
                      >
                        <Ban className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Issue Certificate Modal */}
      {showIssueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl w-full max-w-md animate-in zoom-in-95">
            <div className="p-6 border-b border-[#3F3F46] flex justify-between items-center">
              <h3 className="font-heading font-semibold text-xl text-white">Issue Certificate</h3>
              <button onClick={() => setShowIssueModal(false)} className="text-[#A1A1AA] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleIssueCertificate} className="p-6">
              <div className="mb-6">
                <label className="block text-[#A1A1AA] mb-2 font-body text-sm">Select Student Enrollment</label>
                <select 
                  required
                  value={selectedEnrollment}
                  onChange={e => setSelectedEnrollment(e.target.value)}
                  className="w-full bg-[#121212] border border-[#3F3F46] rounded-lg p-3 text-white focus:outline-none focus:border-brand-primary font-body text-sm"
                >
                  <option value="">-- Choose an enrollment --</option>
                  <option value="e1">Aarav Sharma - ESP32 IoT (Completed)</option>
                  <option value="e2">Sneha Reddy - Embedded Linux (Completed)</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowIssueModal(false)}
                  className="px-4 py-2 font-body text-sm font-medium text-white hover:bg-[#27272A] rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 font-body text-sm font-bold bg-brand-primary text-white rounded-lg hover:bg-[#E66000] transition-colors disabled:opacity-50"
                  disabled={isLoading || !selectedEnrollment}
                >
                  {isLoading ? 'Issuing...' : 'Confirm Issue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Revoke Confirm Dialog */}
      {revokeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-6 max-w-sm w-full animate-in zoom-in-95">
            <h3 className="font-heading font-semibold text-xl text-white mb-2">Revoke Certificate</h3>
            <p className="font-body text-[#A1A1AA] text-sm mb-6">
              Are you sure you want to revoke this certificate? This action cannot be undone and will invalidate the credential publicly.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setRevokeId(null)}
                className="px-4 py-2 font-body text-sm font-medium text-white hover:bg-[#27272A] rounded-lg transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                onClick={() => handleRevoke(revokeId)}
                className="px-4 py-2 font-body text-sm font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Revoking...' : 'Confirm Revoke'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
