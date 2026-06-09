import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ToastProvider } from '@/components/ui/Toast'
import Analytics from '@/components/analytics/Analytics'

export const metadata: Metadata = {
  title: 'Delta V | Premium ECE/EEE Engineering Education for Indian Students',
  description: 'Master VLSI, ASIC, Embedded Systems, FPGA, RTOS, and Electric Vehicle powertrains. Build systems from scratch. An Orbital Research Lab initiative.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-body antialiased pt-16">
        <ToastProvider>
          <Navbar />
          <main className="flex-grow flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  )
}
