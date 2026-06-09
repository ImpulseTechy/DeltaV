'use client'

import React, { useState } from 'react'
import { Download } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { useToast } from '@/components/ui/Toast'

type Payment = {
  id: string
  student_name: string
  course_name: string
  razorpay_order_id: string
  amount: number
  status: 'captured' | 'failed' | 'refunded'
  created_at: string
}

// MOCK DATA
const MOCK_PAYMENTS: Payment[] = [
  { id: 'p1', student_name: 'Aarav Sharma', course_name: 'ESP32 IoT Fundamentals', razorpay_order_id: 'order_PL1234567890', amount: 4999, status: 'captured', created_at: '2026-06-08T10:00:00Z' },
  { id: 'p2', student_name: 'Priya Patel', course_name: 'PLC Industrial Automation', razorpay_order_id: 'order_PL9876543210', amount: 5999, status: 'captured', created_at: '2026-06-07T14:30:00Z' },
  { id: 'p3', student_name: 'Rohan Gupta', course_name: 'Embedded Linux', razorpay_order_id: 'order_PL1122334455', amount: 8999, status: 'refunded', created_at: '2026-06-06T09:15:00Z' },
  { id: 'p4', student_name: 'Sneha Reddy', course_name: 'ESP32 IoT Fundamentals', razorpay_order_id: 'order_PL5544332211', amount: 4999, status: 'failed', created_at: '2026-06-05T16:45:00Z' },
]

export default function PaymentsManagerPage() {
  const [payments, setPayments] = useState<Payment[]>(MOCK_PAYMENTS)
  const [filter, setFilter] = useState<'all' | 'captured' | 'failed' | 'refunded'>('all')
  const { toast } = useToast()

  const filteredPayments = payments.filter(p => filter === 'all' || p.status === filter)

  const handleExportCsv = () => {
    if (filteredPayments.length === 0) {
      toast('No data to export', 'error')
      return
    }

    const headers = ['Student Name', 'Course', 'Order ID', 'Amount (INR)', 'Status', 'Date']
    const csvContent = [
      headers.join(','),
      ...filteredPayments.map(p => [
        `"${p.student_name}"`,
        `"${p.course_name}"`,
        `"${p.razorpay_order_id}"`,
        p.amount,
        p.status,
        `"${new Date(p.created_at).toLocaleString()}"`
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `payments_export_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    toast('CSV downloaded successfully', 'success')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading font-semibold text-3xl text-white">Payment Logs</h1>
          <p className="font-body text-[#A1A1AA] mt-1">View and export transaction history</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="bg-[#1A1A1A] border border-[#3F3F46] text-white text-sm rounded-lg focus:ring-brand-primary focus:border-brand-primary p-2.5 outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="captured">Captured (Success)</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
          <button 
            onClick={handleExportCsv}
            className="bg-[#27272A] text-white px-4 py-2.5 rounded-lg font-body text-sm font-bold flex items-center gap-2 hover:bg-[#3F3F46] transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-[#121212] text-[#A1A1AA]">
              <tr>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Student</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Course</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Order ID</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Amount</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-medium whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3F3F46]">
              {filteredPayments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-[#A1A1AA]">
                    No payments found matching the filter.
                  </td>
                </tr>
              ) : (
                filteredPayments.map((row) => (
                  <tr key={row.id} className="hover:bg-[#121212]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.student_name}</td>
                    <td className="px-6 py-4 text-[#D4D4D8]">{row.course_name}</td>
                    <td className="px-6 py-4 text-[#A1A1AA] font-mono text-xs">{row.razorpay_order_id}</td>
                    <td className="px-6 py-4 text-white font-medium">₹{row.amount.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4">
                      <Badge variant={row.status === 'captured' ? 'success' : row.status === 'failed' ? 'destructive' : 'warning'}>
                        {row.status.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-[#A1A1AA]">{new Date(row.created_at).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
