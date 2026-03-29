import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Heart, Users, Target, FileText } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'
import { getTeamMembers } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Safia Empowerment Foundation — our vision, mission, history, team, and legal registrations. Licensed by SECP and Punjab Charity Commission.',
}

const milestones = [
  { date: 'April 2025', title: 'SECP License Granted', desc: 'Licensed under Section 42, Companies Act 2017' },
  { date: 'May 2025', title: 'Registered as Public Company', desc: 'Formally registered with SECP as a public company' },
  { date: 'Mid 2025', title: 'Punjab Charity Commission', desc: 'Registered to collect and apply charities across Punjab' },
  { date: 'Late 2025', title: 'First Food Distribution', desc: 'Launched weekly food distribution in Lahore' },
  { date: '2026', title: 'Expanding Across Punjab', desc: 'Growing to multiple cities with livelihood programs' },
]

const approach = [
  {
    step: '01',
    icon: Heart,
    title: 'Relief',
    desc: 'Immediate food, clothing, and medical assistance to those in need — no questions, no barriers.',
  },
  {
    step: '02',
    icon: Users,
    title: 'Support',
    desc: 'Counseling, guidance, and connecting beneficiaries to community networks and resources.',
  },
  {
    step: '03',
    icon: Target,
    title: 'Empowerment',
    desc: 'Livelihood placement — fruit carts, newspaper selling, community roles — for lasting self-sufficiency.',
  },
]

export default async function AboutPage() {
  const team = await getTeamMembers().catch(() => [])

  return (
    <>
      <PageHero
        title="About Safia Empowerment Foundation"
        subtitle="A licensed, transparent, and mission-driven organization working to restore dignity to homeless individuals across Punjab."
        breadcrumb="About SEF"
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" centered={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Safia Empowerment Foundation was born from a simple but powerful conviction: that every
                  human being deserves food, dignity, and the opportunity to build a better life. Founded
                  in the heart of Punjab, SEF began as a grassroots response to the visible but often
                  ignored crisis of homelessness across Lahore and surrounding cities.
                </p>
                <p>
                  We believe relief alone is not enough. That is why every person we serve is also
                  offered a pathway — a fruit cart, a community role, a fresh start. We do not just
                  give fish; we teach people to fish.
                </p>
                <p>
                  Licensed by SECP under Section 42 of the Companies Act 2017, and registered with the
                  Punjab Charity Commission, SEF operates with full legal accountability and financial
                  transparency.
                </p>
              </div>
            </div>
            <div className="bg-primary-subtle rounded-2xl p-8 border border-primary-muted">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Founded', value: '2025' },
                  { label: 'Cities Active', value: '5+' },
                  { label: 'SECP Licensed', value: 'Yes' },
                  { label: 'PCC Registered', value: 'Yes' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-bold text-primary">{value}</p>
                    <p className="text-sm text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Vision & Mission" />
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Vision — centered, full-width, prominent */}
            <div className="bg-accent text-white rounded-2xl p-10 text-center">
              <h3 className="text-xl font-bold mb-4 tracking-wide uppercase text-accent-subtle">Our Vision</h3>
              <p className="text-xl leading-relaxed font-medium">
                A world where every individual, regardless of background, has access to basic necessities,
                equal opportunities, and the ability to live a life of dignity and independence.
              </p>
            </div>

            {/* Mission — below, full-width */}
            <div className="bg-primary text-white rounded-2xl p-10">
              <h3 className="text-xl font-bold mb-4 text-accent-medium tracking-wide uppercase">Our Mission</h3>
              <p className="text-primary-muted leading-relaxed">
                To uplift underprivileged communities by providing essential needs, accessible healthcare,
                quality education, and sustainable livelihood opportunities — enabling dignity, equality,
                and self-reliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our 3-Step Approach"
            subtitle="From immediate relief to lasting independence — we walk alongside every beneficiary."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {approach.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-muted mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-xs font-bold text-primary-light">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Journey" subtitle="Key milestones in the growth of SEF." />
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary-pale" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow flex-shrink-0 z-10" />
                    <div className="pb-2">
                      <p className="text-xs font-semibold text-accent-dark uppercase tracking-wider mb-0.5">
                        {m.date}
                      </p>
                      <h4 className="font-bold text-gray-900">{m.title}</h4>
                      <p className="text-sm text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section id="team" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Our Team" subtitle="The people dedicated to making change happen every day." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member._id} className="text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-primary-muted">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(200).height(200).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary-medium">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary-dark font-medium">{member.role}</p>
                  {member.bio && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{member.bio}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legal & Licenses */}
      <section id="licenses" className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Legal Registration & Licenses" subtitle="SEF operates with full legal accountability." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <Award className="w-10 h-10 text-accent-medium mb-4" />
              <h3 className="text-xl font-bold mb-2">SECP License</h3>
              <p className="text-primary-pale text-sm leading-relaxed mb-3">
                Licensed under <strong className="text-white">Section 42 of the Companies Act, 2017</strong> by
                the Securities and Exchange Commission of Pakistan (SECP) in April 2025. Registered as a public
                company in May 2025.
              </p>
              <p className="text-xs text-primary-light">
                This license authorizes SEF to operate as a non-profit public company for social welfare purposes.
              </p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <FileText className="w-10 h-10 text-accent-medium mb-4" />
              <h3 className="text-xl font-bold mb-2">Punjab Charity Commission</h3>
              <p className="text-primary-pale text-sm leading-relaxed mb-3">
                Registered with the <strong className="text-white">Punjab Charity Commission</strong>, which
                authorizes SEF to collect and apply charitable donations for approved social work activities
                across Punjab.
              </p>
              <p className="text-xs text-primary-light">
                Your donations are legally protected and fully accounted for under PCC regulations.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Full Transparency Report
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
