import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getActivePrograms } from '@/sanity/lib/queries'

const fallbackPrograms = [
  {
    _id: '1',
    name: 'Food Distribution',
    slug: { current: 'food-distribution' },
    icon: '🍽️',
    shortDescription: 'Weekly food distribution to underprivileged families in Lahore and surrounding Punjab cities.',
  },
  {
    _id: '2',
    name: 'Clothing Drive',
    slug: { current: 'clothing-drive' },
    icon: '👕',
    shortDescription: 'Seasonal clothing distribution providing warmth and dignity to those in need.',
  },
  {
    _id: '3',
    name: 'Medical Aid',
    slug: { current: 'medical-aid' },
    icon: '🏥',
    shortDescription: 'Free medical consultations, medicines, and emergency health assistance for homeless persons.',
  },
  {
    _id: '4',
    name: 'Livelihood Empowerment',
    slug: { current: 'livelihood' },
    icon: '💼',
    shortDescription: 'Empowering beneficiaries through fruit carts, newspaper selling, and community work.',
  },
]

export default async function ProgramsPreview() {
  const programs = await getActivePrograms().catch(() => [])
  const displayPrograms = programs.length > 0 ? programs : fallbackPrograms

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every program is designed to provide immediate relief and build
            long-term self-sufficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPrograms.map((program) => (
            <Link
              key={program._id}
              href={`/programs/${program.slug.current}`}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-green-200 transition-all"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                {program.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {program.shortDescription}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
