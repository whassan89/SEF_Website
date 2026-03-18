import Image from 'next/image'
import { Quote } from 'lucide-react'
import { getActiveTestimonials } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const fallbackTestimonials = [
  {
    _id: '1',
    beneficiaryName: 'Muhammad A.',
    quote: 'SEF gave me not just food, but hope. The livelihood program helped me start my own fruit cart. Now I can feed my family with my own hands.',
    photo: null,
  },
  {
    _id: '2',
    beneficiaryName: 'Fatima B.',
    quote: 'When I had nowhere to go, SEF was there. The medical help they provided saved my child. May Allah bless this organization.',
    photo: null,
  },
]

export default async function TestimonialsSection() {
  const testimonials = await getActiveTestimonials().catch(() => [])
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stories of Change</h2>
          <p className="text-primary-pale max-w-xl mx-auto">
            Real words from the people whose lives SEF has touched.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayTestimonials.map((t) => (
            <div key={t._id} className="bg-primary-dark/50 rounded-2xl p-6 border border-primary-medium/30">
              <Quote className="w-8 h-8 text-accent-medium mb-4" />
              <p className="text-primary-muted leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(t.photo).width(80).height(80).url()}
                      alt={t.beneficiaryName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {t.beneficiaryName.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-white text-sm">{t.beneficiaryName}</p>
                  <p className="text-xs text-primary-light">SEF Beneficiary</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
