'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const AREAS = [
  'Field Volunteer (Distribution Days)',
  'Medical Volunteer',
  'Admin / Office Support',
  'Social Media / Content',
  'Corporate Volunteering (CSR)',
  'Skills Trainer',
  'Other',
]

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', availability: '', area: '', intro: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000)) // Replace with real API call
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 bg-primary-subtle rounded-2xl border border-primary-pale">
        <CheckCircle className="w-14 h-14 text-primary-medium mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Signing Up!</h3>
        <p className="text-gray-500">Our team will contact you within 48 hours. JazakAllah Khair.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
          <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+92 3XX XXXXXXX"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">City *</label>
          <input required type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Lahore, Faisalabad..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Availability *</label>
        <select required value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium">
          <option value="">Select availability</option>
          <option>Weekdays only</option>
          <option>Weekends only</option>
          <option>Both weekdays & weekends</option>
          <option>Flexible / As needed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Area of Interest *</label>
        <select required value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium">
          <option value="">Select a role</option>
          {AREAS.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Brief Introduction</label>
        <textarea value={form.intro} onChange={(e) => setForm({ ...form, intro: e.target.value })}
          rows={3} placeholder="Tell us a little about yourself and why you want to volunteer..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-primary hover:bg-primary-deep disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors">
        {loading ? 'Submitting...' : 'Submit Volunteer Application'}
      </button>
    </form>
  )
}
