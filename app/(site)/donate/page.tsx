import type { Metadata } from 'next'
import { Shield, Award } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import DonationForm from '@/components/shared/DonationForm'

export const metadata: Metadata = {
  title: 'Donate — Support SEF',
  description: 'Donate to Safia Empowerment Foundation. Every rupee feeds families, clothes the homeless, and funds medical aid across Punjab. JazzCash, EasyPaisa, Card, Bank Transfer accepted.',
}

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Your Donation Restores Dignity"
        subtitle="Every rupee you give puts food in a hungry person's hands tonight. 100% reaches beneficiaries — licensed by SECP, registered with Punjab Charity Commission."
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
                <h3 className="font-bold text-gray-900 mb-1">Your Donation Impact</h3>
                <p className="text-xs text-gray-400 mb-4">Real costs from our field operations</p>
                <div className="space-y-3">
                  {[
                    { amount: 'Rs. 500', impact: 'Feeds one homeless person a hot meal tonight' },
                    { amount: 'Rs. 1,000', impact: 'Provides a winter jacket to someone on the street' },
                    { amount: 'Rs. 2,500', impact: 'Feeds a family of four for a full week' },
                    { amount: 'Rs. 5,000', impact: 'Sponsors a livelihood starter kit (fruit cart / trade)' },
                    { amount: 'Rs. 10,000', impact: 'Funds a free medical camp for 20 beneficiaries' },
                    { amount: 'Rs. 25,000', impact: 'Covers a full weekly food distribution event' },
                  ].map(({ amount, impact }) => (
                    <div key={amount} className="flex items-start gap-3">
                      <span className="text-primary-medium font-bold text-sm min-w-[5.5rem]">{amount}</span>
                      <span className="text-gray-500 text-sm">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="bg-primary-subtle rounded-2xl p-6 border border-primary-muted space-y-4">
                <h3 className="font-bold text-gray-900">Why Trust SEF?</h3>
                <div className="flex gap-3">
                  <Award className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">SECP Licensed</p>
                    <p className="text-xs text-gray-500">Section 42 · Companies Act 2017</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Punjab Charity Commission</p>
                    <p className="text-xs text-gray-500">Reg. No. PB-9590260667301809 · Authorized to collect & apply charities</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg flex-shrink-0">💯</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">100% Transparency</p>
                    <p className="text-xs text-gray-500">Receipts issued for every donation. Full financial reporting published annually.</p>
                  </div>
                </div>
              </div>

              {/* Contact for large donations */}
              <div className="bg-accent-subtle rounded-2xl p-6 border border-accent-muted">
                <h3 className="font-bold text-gray-900 mb-2">Corporate / Large Donations?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  For CSR partnerships, bulk food drives, in-kind clothing, or flood relief contributions — contact us directly.
                </p>
                <a
                  href="mailto:safia.empowerment@gmail.com"
                  className="inline-block text-sm font-semibold text-accent-deep hover:text-accent-deeper"
                >
                  safia.empowerment@gmail.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
