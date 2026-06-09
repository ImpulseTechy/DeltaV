import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import Badge from '@/components/ui/Badge'

export const metadata = {
  title: 'Overview | Admin | Delta V',
}

export default async function AdminOverviewPage() {
  const supabase = createClient()

  // MOCK DATA FOR UI TESTING
  const metrics = {
    totalEnrollments: 142,
    revenueThisMonth: 125000,
    pendingWorkshops: 3,
    activeCohorts: 5
  }

  const recentEnrollments = [
    { id: '1', student: 'Aarav Sharma', course: 'ESP32 IoT Fundamentals', amount: 4999, date: '2026-06-08', status: 'active' },
    { id: '2', student: 'Priya Patel', course: 'PLC Industrial Automation', amount: 5999, date: '2026-06-07', status: 'active' },
    { id: '3', student: 'Rohan Gupta', course: 'Embedded Linux', amount: 8999, date: '2026-06-06', status: 'refunded' },
    { id: '4', student: 'Sneha Reddy', course: 'ESP32 IoT Fundamentals', amount: 4999, date: '2026-06-06', status: 'active' },
  ]

  /* REAL QUERIES TO IMPLEMENT LATER
  // 1. Total Enrollments
  const { count: enrollmentsCount } = await supabase.from('enrollments').select('*', { count: 'exact', head: true })
  
  // 2. Revenue This Month
  // ... query payments table where status='captured' and created_at > startOfMonth ...
  
  // 3. Pending Workshops
  const { count: pendingWorkshopsCount } = await supabase.from('workshop_bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending')

  // 4. Active Cohorts
  const { count: activeCohortsCount } = await supabase.from('cohorts').select('*', { count: 'exact', head: true }).gte('end_date', new Date().toISOString())

  // 5. Recent Enrollments
  // ... query enrollments joined with profiles and cohorts ...
  */

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading font-semibold text-3xl text-white">Overview</h1>
        <p className="font-body text-[#A1A1AA] mt-1">Delta V Platform Analytics</p>
      </div>

      {metrics.pendingWorkshops > 0 && (
        <div className="bg-[rgba(234,179,8,0.1)] border-l-4 border-yellow-500 p-4 rounded-r-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <p className="font-body text-yellow-500/90 text-sm">
              You have <strong>{metrics.pendingWorkshops}</strong> pending workshop booking request(s) awaiting review.
            </p>
          </div>
          <Link 
            href="/admin/workshop-bookings" 
            className="flex items-center gap-1 text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors"
          >
            Review Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          label="Total Enrollments" 
          value={metrics.totalEnrollments.toString()} 
        />
        <MetricCard 
          label="Revenue This Month" 
          value={`₹${metrics.revenueThisMonth.toLocaleString('en-IN')}`} 
        />
        <MetricCard 
          label="Pending Workshops" 
          value={metrics.pendingWorkshops.toString()} 
        />
        <MetricCard 
          label="Active Cohorts" 
          value={metrics.activeCohorts.toString()} 
        />
      </div>

      {/* Recent Enrollments Table */}
      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-[#3F3F46]">
          <h2 className="font-heading font-semibold text-xl text-white">Recent Enrollments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-[#121212] text-[#A1A1AA]">
              <tr>
                <th className="px-6 py-4 font-medium">Student Name</th>
                <th className="px-6 py-4 font-medium">Course</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3F3F46]">
              {recentEnrollments.map((row) => (
                <tr key={row.id} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="px-6 py-4 text-white">{row.student}</td>
                  <td className="px-6 py-4 text-[#D4D4D8]">{row.course}</td>
                  <td className="px-6 py-4 text-[#D4D4D8]">₹{row.amount.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 text-[#A1A1AA]">{new Date(row.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <Badge variant={row.status === 'active' ? 'success' : 'default'}>
                      {row.status.toUpperCase()}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-5 flex flex-col justify-center">
      <div className="font-heading font-semibold text-[2.5rem] leading-none text-white tracking-wide">
        {value}
      </div>
      <div className="font-body text-[13px] text-[#A1A1AA] mt-2 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
