import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Stethoscope, Pill, Phone } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'Medical Aid Program',
  description: 'SEF provides free medical consultations, medicines, and emergency health assistance to homeless persons across Punjab.',
}

export default function MedicalAidPage() {
  return (
    <>
      <PageHero
        title="Medical Help Program"
        subtitle="Free healthcare for those who cannot afford it — because health is a human right."
        breadcrumb="Programs / Medical Aid"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Stethoscope, label: 'Services', value: 'Free consultations with qualified doctors' },
              { icon: Pill, label: 'Medicines', value: 'Essential medicines provided at no cost' },
              { icon: Phone, label: 'Emergency', value: 'Referrals to hospitals for emergency cases' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 bg-red-50 rounded-xl p-5">
                <Icon className="w-8 h-8 text-red-600 flex-shrink-0 mt-0.5" />
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
                Homeless individuals face severe health challenges — exposure to the elements, malnutrition,
                and lack of access to basic healthcare. Our Medical Help Program brings qualified medical
                professionals directly to the communities that need them most.
              </p>
              <p>
                Through partnerships with volunteer doctors and clinics, SEF organizes regular medical
                camps at distribution sites, providing free consultations, basic diagnostics, and
                essential medicines — entirely at no cost to beneficiaries.
              </p>
              <p>
                For serious cases, we coordinate hospital referrals and provide support through the
                admission and treatment process, ensuring no one is turned away due to financial barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How You Can Help" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { title: 'Donate Medicines', desc: 'Unused, in-date medicines gratefully accepted.' },
              { title: 'Medical Volunteer', desc: 'Doctors, nurses, and pharmacists — join our medical camps.' },
              { title: 'Fund a Camp', desc: 'Rs. 10,000–25,000 sponsors a full medical camp event.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 text-center border border-red-200">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-colors">
              <Heart className="w-5 h-5" fill="white" /> Donate Now
            </Link>
            <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Volunteer as Medical Professional
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
