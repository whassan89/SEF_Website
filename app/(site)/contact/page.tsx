import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import ContactForm from '@/components/shared/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Safia Empowerment Foundation. Contact us for donations, partnerships, volunteering, or media inquiries.',
}

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Office No. 7, First Floor, Al Rehman Arcade, 242 C Block, PIA Road, Johar Town, Lahore' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+92 334 4782395', href: 'tel:+923344782395' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+92 332 4452894', href: 'tel:+923324452894' },
  { icon: Mail, label: 'General Inquiries', value: 'safia.empowerment@gmail.com', href: 'mailto:safia.empowerment@gmail.com' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 9 AM – 5 PM PKT' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you — donors, partners, volunteers, or media."
        breadcrumb="Contact"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                    <Icon className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="font-medium text-gray-900 hover:text-primary-dark transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.9402996138542!2d74.28144056960218!3d31.44824054250298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d1815d6659%3A0xf2df90e79e0dacd2!2sAl-Rehman%20Arcade!5e0!3m2!1sen!2s!4v1774776416392!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SEF Office Location"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
