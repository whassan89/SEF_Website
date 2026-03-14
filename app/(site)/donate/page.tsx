import type { Metadata } from 'next'
import { Shield, Award } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import DonationForm from '@/components/shared/DonationForm'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Donate to Safia Empowerment Foundation. Support food, clothing, medical aid and livelihood programs across Punjab. JazzCash, EasyPaisa, Card, Bank Transfer accepted.',
}

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support Our Cause"
        subtitle="100% of your donation reaches beneficiaries. Licensed, transparent, and accountable."
        breadcrumb="Donate"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <DonationForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why donate */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Your Donation Impact</h3>
                <div className="space-y-3">
                  {[
                    { amount: 'Rs. 500', impact: 'Feeds one family for a day' },
                    { amount: 'Rs. 1,000', impact: 'Provides a winter jacket' },
                    { amount: 'Rs. 2,500', impact: 'Feeds a family for a week' },
                    { amount: 'Rs. 5,000', impact: 'Sponsors a livelihood kit' },
                    { amount: 'Rs. 10,000', impact: 'Sponsors a medical camp' },
                    { amount: 'Rs. 25,000', impact: 'Funds a distribution event' },
                  ].map(({ amount, impact }) => (
                    <div key={amount} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-sm min-w-20">{amount}</span>
                      <span className="text-gray-500 text-sm">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 space-y-4">
                <h3 className="font-bold text-gray-900">Why Trust SEF?</h3>
                <div className="flex gap-3">
                  <Award className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">SECP Licensed</p>
                    <p className="text-xs text-gray-500">Section 42 · Companies Act 2017</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Punjab Charity Commission</p>
                    <p className="text-xs text-gray-500">Authorized to collect & apply charities</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg">💯</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">100% Transparency</p>
                    <p className="text-xs text-gray-500">Full financial reporting published annually</p>
                  </div>
                </div>
              </div>

              {/* Contact for large donations */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-gray-900 mb-2">Corporate / Large Donations?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  For CSR partnerships, bulk donations, or in-kind contributions, contact us directly.
                </p>
                <a
                  href="mailto:info@sefngo.com"
                  className="inline-block text-sm font-semibold text-amber-700 hover:text-amber-800"
                >
                  info@sefngo.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
