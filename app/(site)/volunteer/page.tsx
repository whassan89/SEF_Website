import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'
import VolunteerForm from '@/components/shared/VolunteerForm'
import { Heart, Stethoscope, Megaphone, Building2, Users, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join the Safia Empowerment Foundation volunteer team. Field volunteers, medical professionals, and corporate teams welcome.',
}

const roles = [
  { icon: Heart, title: 'Field Volunteer', desc: 'Join us on weekly distribution days — serving food, clothing, and essentials directly to beneficiaries.' },
  { icon: Stethoscope, title: 'Medical Volunteer', desc: 'Doctors, nurses, and pharmacists — join our medical camps and provide free health services.' },
  { icon: Building2, title: 'Admin / Office Support', desc: 'Help with coordination, data entry, donor communication, and organizational tasks.' },
  { icon: Megaphone, title: 'Social Media Volunteer', desc: 'Help us document and share our work — photography, video editing, content writing.' },
  { icon: Users, title: 'Corporate Volunteering', desc: 'Organize team volunteering days for your company. Great for CSR objectives.' },
  { icon: BookOpen, title: 'Skills Trainer', desc: 'Teach basic business, literacy, or vocational skills to livelihood program participants.' },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Volunteer with SEF"
        subtitle="Your time is just as valuable as a donation. Join us and make a difference every week."
        breadcrumb="Volunteer"
      />

      {/* Why volunteer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Volunteer Roles" subtitle="There is a place for every skill and schedule in our team." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {roles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mb-4">
                  <Icon className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Sign-up form */}
          <div className="max-w-2xl mx-auto">
            <SectionTitle title="Sign Up to Volunteer" subtitle="Fill in the form and our team will contact you within 48 hours." />
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  )
}
