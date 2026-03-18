import Link from 'next/link'
import { Heart, Users, Share2 } from 'lucide-react'

const ways = [
  {
    icon: Heart,
    iconColor: 'text-accent',
    bg: 'bg-accent-subtle',
    title: 'Donate',
    description:
      'Your donation directly funds food, clothing, and medical aid. Even Rs. 500 feeds a family for a day.',
    cta: 'Donate Now',
    href: '/donate',
    ctaStyle: 'bg-accent hover:bg-accent-dark text-white',
  },
  {
    icon: Users,
    iconColor: 'text-primary-medium',
    bg: 'bg-primary-subtle',
    title: 'Volunteer',
    description:
      'Join our team on distribution days, or contribute your professional skills — legal, medical, or administrative.',
    cta: 'Get Involved',
    href: '/volunteer',
    ctaStyle: 'bg-primary hover:bg-primary-deep text-white',
  },
  {
    icon: Share2,
    iconColor: 'text-blue-500',
    bg: 'bg-blue-50',
    title: 'Spread the Word',
    description:
      'Share our mission with your network. Awareness is the first step toward ending homelessness in Punjab.',
    cta: 'Share Our Story',
    href: '/news',
    ctaStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
]

export default function HowToHelp() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Every action — big or small — makes a real difference in the lives of homeless individuals across Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ways.map((way) => {
            const Icon = way.icon
            return (
              <div key={way.title} className={`${way.bg} rounded-2xl p-8 text-center`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mb-5`}>
                  <Icon className={`w-7 h-7 ${way.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{way.description}</p>
                <Link
                  href={way.href}
                  className={`inline-block px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors ${way.ctaStyle}`}
                >
                  {way.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
