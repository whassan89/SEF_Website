import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Clock, MapPin, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'Food Distribution Program',
  description: 'SEF runs weekly food distribution for underprivileged families across Lahore and Punjab. Donate to feed a family today.',
}

export default function FoodDistributionPage() {
  return (
    <>
      <PageHero
        title="Weekly Food Distribution"
        subtitle="Ensuring no one in Punjab goes to sleep hungry — one family at a time."
        breadcrumb="Programs / Food Distribution"
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Clock, label: 'Frequency', value: 'Weekly — every week without exception' },
              { icon: MapPin, label: 'Locations', value: 'Lahore & surrounding Punjab cities' },
              { icon: Users, label: 'Beneficiaries', value: 'Homeless individuals & poor families' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-green-50 rounded-xl p-5">
                <Icon className="w-8 h-8 text-green-700 flex-shrink-0 mt-0.5" />
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
                Our Weekly Food Distribution program is the cornerstone of SEF&apos;s work. Every week, our
                volunteers take to the streets and underprivileged neighborhoods of Lahore and surrounding
                Punjab cities to distribute meals and food packages to homeless individuals and struggling families.
              </p>
              <p>
                We specifically target areas where homelessness and poverty are concentrated — slum settlements,
                under-bridge communities, and daily wage worker colonies. Our volunteers ensure that every
                person is served with dignity and respect.
              </p>
              <p>
                The program runs rain or shine, summer or winter. Because hunger does not take a day off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How You Can Help" subtitle="Every contribution — big or small — feeds real people." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { amount: 'Rs. 500', desc: 'Feeds one family for a day' },
              { amount: 'Rs. 2,500', desc: 'Feeds a family for a week' },
              { amount: 'Rs. 10,000', desc: 'Sponsors a distribution event' },
            ].map(({ amount, desc }) => (
              <div key={amount} className="bg-white rounded-xl p-5 text-center border border-amber-200">
                <p className="text-2xl font-bold text-green-800">{amount}</p>
                <p className="text-sm text-gray-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              <Heart className="w-5 h-5" fill="white" /> Donate Now
            </Link>
            <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              <Users className="w-5 h-5" /> Volunteer with Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
