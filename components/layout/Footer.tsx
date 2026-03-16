import Link from 'next/link'
import { Heart, Youtube, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

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
  { label: 'YouTube', href: 'https://youtube.com/@sefngo', icon: Youtube },
  { label: 'Facebook', href: 'https://facebook.com/sefngo', icon: Facebook },
  { label: 'Instagram', href: 'https://instagram.com/sefngo', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/sefngo', icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-800" fill="#1B5E20" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Safia Empowerment</p>
                <p className="text-xs text-green-300">Foundation</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
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
                  className="w-8 h-8 rounded-full bg-green-700 hover:bg-amber-500 flex items-center justify-center transition-colors"
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
                  <Link href={link.href} className="text-green-200 hover:text-amber-400 text-sm transition-colors">
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
                  <Link href={link.href} className="text-green-200 hover:text-amber-400 text-sm transition-colors">
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
              <li className="flex items-start gap-2 text-green-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                Office No. 7, First Floor, Al Rehman Arcade, 242 C Block, PIA Road, Johar Town, Lahore
              </li>
              <li>
                <a href="mailto:safia.empowerment@gmail.com" className="flex items-center gap-2 text-green-200 hover:text-amber-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  safia.empowerment@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923144782395" className="flex items-center gap-2 text-green-200 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  +92 314 4782395
                </a>
              </li>
              <li>
                <a href="tel:+923324452894" className="flex items-center gap-2 text-green-200 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  +92 332 4452894
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-400">
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
