import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const learnLinks = [
  { label: 'About SEF', href: '/about' },
  { label: 'Our Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News & Blog', href: '/news' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Transparency', href: '/transparency' },
]

const companyLinks = [
  { label: 'Our Mission', href: '/about#mission' },
  { label: 'Team', href: '/about#team' },
  { label: 'Legal & Licenses', href: '/transparency' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const socialLinks = [
  // { label: 'YouTube', href: 'https://youtube.com/@sefngo', icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1P5j7JNFQU/?mibextid=wwXIfr', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/sefhumanityfirst', icon: Instagram },
  // { label: 'LinkedIn', href: 'https://linkedin.com/company/sefngo', icon: Linkedin },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sefhumanityfirst', icon: TikTokIcon },
]

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-block bg-white rounded-lg px-3 py-2">
              <Image
                src="/images/SEF-logo1.jpeg"
                alt="Safia Empowerment Foundation"
                width={140}
                height={48}
                className="h-[72px] w-auto object-contain"
              />
            </div>
            <p className="text-primary-pale text-sm leading-relaxed mb-4">
              Empowering lives and restoring dignity for homeless individuals across Punjab, Pakistan.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-primary-dark hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-pale hover:text-accent-medium text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Organization</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-pale hover:text-accent-medium text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-pale text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-medium" />
                Office No. 7, First Floor, Al Rehman Arcade, 242 C Block, PIA Road, Johar Town, Lahore
              </li>
              <li>
                <a href="mailto:safia.empowerment@gmail.com" className="flex items-center gap-2 text-primary-pale hover:text-accent-medium text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 text-accent-medium" />
                  safia.empowerment@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923344782395" className="flex items-center gap-2 text-primary-pale hover:text-accent-medium text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent-medium" />
                  +92 334 4782395
                </a>
              </li>
              <li>
                <a href="tel:+923324452894" className="flex items-center gap-2 text-primary-pale hover:text-accent-medium text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent-medium" />
                  +92 332 4452894
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-light">
            <p>© {new Date().getFullYear()} Safia Empowerment Foundation. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center">
              <span>Licensed by SECP under Section 42 | Companies Act 2017</span>
              <span className="hidden sm:inline">•</span>
              <span>Registered with Punjab Charity Commission</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
