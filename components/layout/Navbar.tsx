'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

const programs = [
  { label: 'Food Distribution', href: '/programs/food-distribution' },
  { label: 'Clothing Drive', href: '/programs/clothing-drive' },
  { label: 'Medical Aid', href: '/programs/medical-aid' },
  { label: 'Livelihood Empowerment', href: '/programs/livelihood' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/SEF-logo1.jpeg"
              alt="Safia Empowerment Foundation"
              width={140}
              height={48}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Programs dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProgramsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-subtle hover:text-primary"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Donate CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Heart className="w-4 h-4" fill="white" />
              Donate Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-accent text-white font-semibold px-4 py-3 rounded-lg mb-3"
            >
              <Heart className="w-4 h-4" fill="white" /> Donate Now
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-subtle hover:text-primary rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Programs</p>
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
