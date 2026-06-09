import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata(): Promise<Metadata> {
  const title = "College Engineering Workshops"
  const description = "Bring Delta V's hands-on engineering workshops to your college. IoT, Robotics, and Embedded Systems workshops for ECE students."
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

export default function WorkshopsPage() {
  // Currently we handle workshop listings on the homepage and specific bookings
  redirect('/')
}
