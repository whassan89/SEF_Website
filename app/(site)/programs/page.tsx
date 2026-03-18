import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { getActivePrograms } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'Our Programs',
  description:
    'SEF runs food distribution, clothing drives, medical aid, and livelihood empowerment programs across Punjab, Pakistan.',
}

const fallbackPrograms = [
  { _id: '1', name: 'Food Distribution', slug: { current: 'food-distribution' }, icon: '🍽️', shortDescription: 'Weekly food distribution to underprivileged families across Punjab.', featuredImage: null },
  { _id: '2', name: 'Clothing Drive', slug: { current: 'clothing-drive' }, icon: '👕', shortDescription: 'Seasonal clothing distribution providing warmth and dignity.', featuredImage: null },
  { _id: '3', name: 'Medical Aid', slug: { current: 'medical-aid' }, icon: '🏥', shortDescription: 'Free medical consultations and emergency health assistance.', featuredImage: null },
  { _id: '4', name: 'Livelihood Empowerment', slug: { current: 'livelihood' }, icon: '💼', shortDescription: 'Empowering beneficiaries toward self-sufficiency and income generation.', featuredImage: null },
]

export default async function ProgramsPage() {
  const programs = await getActivePrograms().catch(() => [])
  const displayPrograms = programs.length > 0 ? programs : fallbackPrograms

  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Every program is designed to provide immediate relief and build lasting self-sufficiency."
        breadcrumb="Programs"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayPrograms.map((program) => (
              <Link
                key={program._id}
                href={`/programs/${program.slug.current}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-light hover:shadow-lg transition-all"
              >
                {program.featuredImage ? (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={urlFor(program.featuredImage).width(800).height(416).url()}
                      alt={program.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-primary-muted to-primary-subtle flex items-center justify-center text-7xl">
                    {program.icon}
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {program.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{program.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
