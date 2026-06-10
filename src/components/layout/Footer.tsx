import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Image from 'next/image'

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand details */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image 
                src="/logo-cropped.png" 
                alt="Delta V Logo" 
                width={299} 
                height={179} 
                className="h-7 w-auto object-contain"
              />
              <span className="font-display text-white text-xl tracking-[0.15em] font-semibold transition-colors group-hover:text-orange">
                DELTA V
              </span>
            </Link>
            <p className="font-display text-white text-[1.1rem] tracking-wide uppercase font-semibold">
              Learn. Build. Launch.
            </p>
            <p className="font-body text-xs text-text-muted">
              An Orbital Research Lab brand.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-orange uppercase tracking-wider font-semibold">
              Platform
            </h4>
            <ul className="flex flex-col gap-2 font-body text-sm text-text-secondary">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/workshops#book" className="hover:text-white transition-colors">
                  Book a Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-orange uppercase tracking-wider font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-2 font-body text-sm text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-white transition-colors">
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-orange uppercase tracking-wider font-semibold">
              Connect
            </h4>
            <div className="flex items-center gap-4 text-text-secondary mb-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:hello@deltav.in"
              className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-orange" />
              hello@deltav.in
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body text-text-muted">
          <span>&copy; {new Date().getFullYear()} Delta V. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-secondary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
