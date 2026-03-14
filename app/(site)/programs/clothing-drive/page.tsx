import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Calendar, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'Clothing Drive Program',
  description: 'SEF distributes clothing to homeless and underprivileged individuals across Punjab. Donate clothes or money to help.',
}

export default function ClothingDrivePage() {
  return (
    <>
      <PageHero
        title="Clothing Drive & Distribution"
        subtitle="Providing warmth and dignity — because every person deserves to be clothed."
        breadcrumb="Programs / Clothing Drive"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Calendar, label: 'Frequency', value: 'Seasonal (Winter & Summer) + on-demand' },
              { icon: Users, label: 'Recipients', value: 'Homeless individuals, poor families, children' },
              { icon: Heart, label: 'What We Give', value: 'New & clean used clothes, winter jackets, blankets' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-blue-50 rounded-xl p-5">
                <Icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="font-semibold text-gray-900 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <SectionTitle title="About This Program" centered={false} />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pakistan&apos;s winters can be brutal, particularly for those without shelter. Our Clothing
                Drive collects new and gently-used clothing from donors across Punjab and distributes
                them directly to homeless individuals and families in need.
              </p>
              <p>
                Each piece of clothing is inspected, cleaned if necessary, and distributed with care.
                We focus on winter essentials — jackets, sweaters, blankets — during the cold season,
                and light clothing during summer months.
              </p>
              <p>
                You can contribute in two ways: donate money so we can purchase new clothing, or
                donate your clean, unused clothing directly at designated drop-off points.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How You Can Help" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { title: 'Donate Money', desc: 'We buy quality new clothing in bulk. Rs. 1,000 buys a winter jacket.' },
              { title: 'Donate Clothes', desc: 'Clean, gently-used clothes accepted at our Lahore office.' },
              { title: 'Organize a Drive', desc: 'Run a clothing drive at your office, school, or community.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 text-center border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              <Heart className="w-5 h-5" fill="white" /> Donate Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Drop-off Locations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
