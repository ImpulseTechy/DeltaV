'use client'

import React, { useState } from 'react'
import { Eye, CheckCircle2, XCircle, X } from 'lucide-react'
import { clsx } from 'clsx'
import { useToast } from '@/components/ui/Toast'
import Badge from '@/components/ui/Badge'

type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'rejected'

type Booking = {
  id: string
  college_name: string
  contact_name: string
  designation: string
  official_email: string
  whatsapp_number: string
  workshop_topic: string
  preferred_date: string
  alternate_date: string | null
  expected_students: number
  status: BookingStatus
  created_at: string
  additional_notes?: string
}

// MOCK DATA
const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    college_name: 'VIT Vellore',
    contact_name: 'Dr. Ramesh Kumar',
    designation: 'HOD ECE',
    official_email: 'ramesh@vit.ac.in',
    whatsapp_number: '9876543210',
    workshop_topic: 'ESP32 & IoT',
    preferred_date: '2026-07-15',
    alternate_date: '2026-07-20',
    expected_students: 120,
    status: 'pending',
    created_at: '2026-06-08T10:00:00Z',
    additional_notes: 'Need projector setup.'
  },
  {
    id: 'b2',
    college_name: 'SRM Institute',
    contact_name: 'Prof. Anita Sharma',
    designation: 'Assistant Professor',
    official_email: 'anita@srm.edu',
    whatsapp_number: '9876543211',
    workshop_topic: 'PLC Automation',
    preferred_date: '2026-06-25',
    alternate_date: null,
    expected_students: 80,
    status: 'confirmed',
    created_at: '2026-06-05T14:30:00Z',
  }
]

export default function WorkshopBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS)
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all')
  
  const [viewBooking, setViewBooking] = useState<Booking | null>(null)
  
  const [confirmApproveId, setConfirmApproveId] = useState<string | null>(null)
  const [rejectId, setRejectId] = useState<string | null>(null)
  const [rejectReason, setRejectReason] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { toast } = useToast()

  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter)

  const handleApprove = async (id: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/admin/bookings/${id}/approve`, { method: 'PATCH' })
      if (!res.ok) throw new Error('Failed to approve')
      
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'confirmed' } : b))
      toast('Workshop confirmed successfully. Email sent to coordinator.', 'success')
      setConfirmApproveId(null)
    } catch (err: any) {
      toast(err.message || 'Error approving booking', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReject = async (id: string) => {
    if (!rejectReason.trim()) {
      toast('Please provide a reason for rejection.', 'error')
      return
    }
    
    setIsLoading(true)
    try {
      const res = await fetch(`/api/admin/bookings/${id}/reject`, { 
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: rejectReason })
      })
      if (!res.ok) throw new Error('Failed to reject')
      
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'rejected' } : b))
      toast('Workshop rejected. Email sent to coordinator.', 'success')
      setRejectId(null)
      setRejectReason('')
    } catch (err: any) {
      toast(err.message || 'Error rejecting booking', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-semibold text-3xl text-white">Workshop Bookings</h1>
        <p className="font-body text-[#A1A1AA] mt-1">Manage institutional workshop requests</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#3F3F46] pb-4">
        {['all', 'pending', 'confirmed', 'completed', 'rejected'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab as any)}
            className={clsx(
              "px-4 py-2 text-sm font-medium rounded-full capitalize transition-colors",
              filter === tab 
                ? "bg-white text-black" 
                : "text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1A]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-[#121212] text-[#A1A1AA]">
              <tr>
                <th className="px-6 py-4 font-medium whitespace-nowrap">College</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Contact</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Topic</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Preferred Date</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Students</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3F3F46]">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-[#A1A1AA]">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((row) => (
                  <tr key={row.id} className="hover:bg-[#121212]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.college_name}</td>
                    <td className="px-6 py-4 text-[#D4D4D8]">
                      <div>{row.contact_name}</div>
                      <div className="text-xs text-[#A1A1AA]">{row.official_email}</div>
                    </td>
                    <td className="px-6 py-4 text-[#D4D4D8]">{row.workshop_topic}</td>
                    <td className="px-6 py-4 text-[#A1A1AA]">{new Date(row.preferred_date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-[#D4D4D8]">{row.expected_students}</td>
                    <td className="px-6 py-4">
                      <Badge variant={row.status === 'confirmed' || row.status === 'completed' ? 'success' : row.status === 'rejected' ? 'destructive' : 'warning'}>
                        {row.status.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button 
                        onClick={() => setViewBooking(row)}
                        className="p-2 text-[#A1A1AA] hover:text-white bg-[#27272A] rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {row.status === 'pending' && (
                        <>
                          <button 
                            onClick={() => setConfirmApproveId(row.id)}
                            className="p-2 text-green-500 hover:text-white bg-green-500/10 hover:bg-green-500 rounded transition-colors"
                            title="Approve"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => setRejectId(row.id)}
                            className="p-2 text-red-500 hover:text-white bg-red-500/10 hover:bg-red-500 rounded transition-colors"
                            title="Reject"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Drawer */}
      {viewBooking && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setViewBooking(null)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#1A1A1A] border-l border-[#3F3F46] shadow-2xl z-50 transform transition-transform animate-in slide-in-from-right overflow-y-auto">
            <div className="p-6 border-b border-[#3F3F46] flex justify-between items-center bg-[#121212] sticky top-0 z-10">
              <h2 className="font-heading font-semibold text-xl text-white">Booking Details</h2>
              <button onClick={() => setViewBooking(null)} className="text-[#A1A1AA] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 font-body text-sm">
              <div>
                <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-2">Institution</h3>
                <p className="text-white text-lg">{viewBooking.college_name}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-1">Contact Name</h3>
                  <p className="text-white">{viewBooking.contact_name}</p>
                </div>
                <div>
                  <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-1">Designation</h3>
                  <p className="text-white">{viewBooking.designation}</p>
                </div>
                <div>
                  <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-1">Email</h3>
                  <p className="text-white">{viewBooking.official_email}</p>
                </div>
                <div>
                  <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-1">Phone</h3>
                  <p className="text-white">{viewBooking.whatsapp_number}</p>
                </div>
              </div>

              <div className="border-t border-[#3F3F46] pt-6">
                <h3 className="text-[#A1A1AA] uppercase tracking-wider text-xs font-bold mb-2">Workshop Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[#A1A1AA] mr-2">Topic:</span>
                    <span className="text-white">{viewBooking.workshop_topic}</span>
                  </div>
                  <div>
                    <span className="text-[#A1A1AA] mr-2">Preferred Date:</span>
                    <span className="text-white">{new Date(viewBooking.preferred_date).toLocaleDateString()}</span>
                  </div>
                  {viewBooking.alternate_date && (
                    <div>
                      <span className="text-[#A1A1AA] mr-2">Alternate Date:</span>
                      <span className="text-white">{new Date(viewBooking.alternate_date).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[#A1A1AA] mr-2">Expected Students:</span>
                    <span className="text-white">{viewBooking.expected_students}</span>
                  </div>
                  {viewBooking.additional_notes && (
                    <div>
                      <h4 className="text-[#A1A1AA] mt-2 mb-1">Notes:</h4>
                      <p className="text-[#D4D4D8] bg-[#121212] p-3 rounded border border-[#3F3F46]">
                        {viewBooking.additional_notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Approve Confirm Dialog */}
      {confirmApproveId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-6 max-w-sm w-full animate-in zoom-in-95">
            <h3 className="font-heading font-semibold text-xl text-white mb-2">Confirm Workshop</h3>
            <p className="font-body text-[#A1A1AA] text-sm mb-6">
              Are you sure you want to approve this workshop? This will immediately send a confirmation email to the coordinator.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setConfirmApproveId(null)}
                className="px-4 py-2 font-body text-sm font-medium text-white hover:bg-[#27272A] rounded-lg transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                onClick={() => handleApprove(confirmApproveId)}
                className="px-4 py-2 font-body text-sm font-bold bg-brand-primary text-white rounded-lg hover:bg-[#E66000] transition-colors disabled:opacity-50 flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Approving...' : 'Confirm Approval'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {rejectId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-6 max-w-sm w-full animate-in zoom-in-95">
            <h3 className="font-heading font-semibold text-xl text-white mb-2">Reject Workshop</h3>
            <p className="font-body text-[#A1A1AA] text-sm mb-4">
              Please provide a reason for rejecting this request. This will be included in the email sent to the coordinator.
            </p>
            <textarea
              value={rejectReason}
              onChange={e => setRejectReason(e.target.value)}
              className="w-full bg-[#121212] border border-[#3F3F46] rounded-lg p-3 text-white focus:outline-none focus:border-brand-primary font-body text-sm mb-6"
              rows={3}
              placeholder="E.g., Dates not available, inadequate student count..."
            />
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setRejectId(null)}
                className="px-4 py-2 font-body text-sm font-medium text-white hover:bg-[#27272A] rounded-lg transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                onClick={() => handleReject(rejectId)}
                className="px-4 py-2 font-body text-sm font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Rejecting...' : 'Confirm Rejection'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
