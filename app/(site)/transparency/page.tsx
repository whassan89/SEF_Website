import type { Metadata } from 'next'
import { Award, Shield, FileText, PieChart } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'

export const metadata: Metadata = {
  title: 'Transparency',
  description: 'SEF financial transparency — SECP license, Punjab Charity Commission registration, annual reports, and fund usage breakdown.',
}

const fundUsage = [
  { label: 'Food Distribution', percent: 45, color: 'bg-primary-medium' },
  { label: 'Clothing Drive', percent: 20, color: 'bg-blue-500' },
  { label: 'Medical Aid', percent: 20, color: 'bg-red-500' },
  { label: 'Livelihood Programs', percent: 10, color: 'bg-accent' },
  { label: 'Operations', percent: 5, color: 'bg-gray-400' },
]

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        title="Transparency & Accountability"
        subtitle="We are committed to 100% transparency in how your donations are used."
        breadcrumb="Transparency"
      />

      {/* Registrations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Legal Registrations" subtitle="SEF is fully licensed and legally accountable." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-subtle rounded-2xl p-8 border border-primary-muted">
              <Award className="w-10 h-10 text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SECP License</h3>
              <dl className="space-y-2 text-sm">
                {[
                  ['Authority', 'Securities & Exchange Commission of Pakistan'],
                  ['License Type', 'Section 42 — Companies Act, 2017'],
                  ['Licensed', 'April 2025'],
                  ['Registered as', 'Public Company — May 2025'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-gray-500">{label}:</dt>
                    <dd className="font-semibold text-gray-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-accent-subtle rounded-2xl p-8 border border-accent-muted">
              <Shield className="w-10 h-10 text-accent-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Punjab Charity Commission</h3>
              <dl className="space-y-2 text-sm">
                {[
                  ['Authority', 'Government of the Punjab'],
                  ['Registration No.', 'PB-9550265667301809'],
                  ['Category', 'Category A Charity'],
                  ['Registered', '12-Dec-2025'],
                  ['Valid Until', '11-Dec-2026'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-gray-500">{label}:</dt>
                    <dd className="font-semibold text-gray-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Fund usage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How Your Donations Are Used"
            subtitle="Every rupee is accounted for and directed to those who need it most."
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-6">
              <PieChart className="w-8 h-8 text-primary-dark mb-4" />
              <div className="space-y-4">
                {fundUsage.map(({ label, percent, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-800">{label}</span>
                      <span className="font-bold text-gray-900">{percent}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6">
                * Fund allocation is approximate and may vary by campaign. Operations include staff, transport, and communication costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Annual Reports" subtitle="Published financial reports for full donor accountability." />
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Annual Report 2025–26</h3>
              <p className="text-sm text-gray-500 mb-4">
                Our first annual report is being prepared and will be published here once complete.
                SEF was licensed in April 2025 and this will be our inaugural report.
              </p>
              <span className="inline-block bg-accent-muted text-accent-deep text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
