import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, TrendingUp, ShoppingCart, Newspaper, Users } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'Livelihood Empowerment Program',
  description: 'SEF empowers homeless individuals with fruit carts, newspaper selling, and community roles — building self-sufficiency across Punjab.',
}

const livelihoods = [
  { icon: ShoppingCart, title: 'Fruit Cart', desc: 'Starter kit including cart, initial stock, and location guidance.' },
  { icon: Newspaper, title: 'Newspaper Selling', desc: 'Distribution routes, initial bundle, and vendor registration support.' },
  { icon: Users, title: 'Community Roles', desc: 'Work within SEF as kitchen staff, distribution helpers, or admin support.' },
  { icon: TrendingUp, title: 'Skills Training', desc: 'Basic business, literacy, and vocational skills workshops.' },
]

export default function LivelihoodPage() {
  return (
    <>
      <PageHero
        title="Livelihood Empowerment"
        subtitle="We don't just give fish — we teach people to fish. Moving from relief to self-reliance."
        breadcrumb="Programs / Livelihood Empowerment"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTitle title="Breaking the Cycle" centered={false} />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Relief addresses today&apos;s crisis. Empowerment prevents tomorrow&apos;s. The SEF Livelihood
                Empowerment Program is designed for beneficiaries who are ready to take the next step —
                from receiving help to earning independently.
              </p>
              <p>
                We assess each individual&apos;s capabilities, health, and interests. Based on this, we match
                them with suitable income-generating activities and provide everything needed to get started —
                the tools, the training, and the mentorship.
              </p>
            </div>
          </div>

          <SectionTitle title="Livelihood Pathways" subtitle="We match each person with the most suitable pathway based on their abilities." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {livelihoods.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-800 mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How You Can Help" subtitle="Sponsor a livelihood kit and change someone's life permanently." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { amount: 'Rs. 5,000', desc: 'Sponsors a newspaper vendor starter kit' },
              { amount: 'Rs. 10,000', desc: 'Sponsors a fruit cart with initial stock' },
              { amount: 'Rs. 25,000', desc: 'Full livelihood package with 3 months mentorship' },
            ].map(({ amount, desc }) => (
              <div key={amount} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-amber-400">{amount}</p>
                <p className="text-sm text-green-200 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              <Heart className="w-5 h-5" fill="white" /> Sponsor a Livelihood Kit
            </Link>
            <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Volunteer as Mentor
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
