'use client'

import { useState } from 'react'
import { Heart, CreditCard, Smartphone, Building2, Globe } from 'lucide-react'

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000]

const CAUSES = [
  { value: 'general', label: 'General Fund (Where Most Needed)' },
  { value: 'food', label: 'Food Distribution' },
  { value: 'clothing', label: 'Clothing Drive' },
  { value: 'medical', label: 'Medical Aid' },
  { value: 'livelihood', label: 'Livelihood Kit' },
]

type PaymentMethod = 'paypro' | 'jazzcash' | 'easypaisa' | 'bank' | 'paypal'

export default function DonationForm() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [cause, setCause] = useState('general')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paypro')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const finalAmount = selectedAmount ?? Number(customAmount) ?? 0

  const paymentTabs: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    { id: 'paypro', label: 'Card / PayPro', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'jazzcash', label: 'JazzCash', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'easypaisa', label: 'EasyPaisa', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'bank', label: 'Bank Transfer', icon: <Building2 className="w-4 h-4" /> },
    { id: 'paypal', label: 'PayPal', icon: <Globe className="w-4 h-4" /> },
  ]

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Donation type toggle */}
      <div className="bg-gray-50 border-b border-gray-200 p-1 flex">
        {(['one-time', 'monthly'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setDonationType(type)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors capitalize ${
              donationType === type
                ? 'bg-white shadow text-green-800 border border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {type === 'one-time' ? 'One-Time Donation' : 'Monthly Recurring'}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6">
        {/* Preset amounts */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount (PKR)</label>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => { setSelectedAmount(amount); setCustomAmount('') }}
                className={`py-2.5 rounded-lg text-sm font-bold border transition-colors ${
                  selectedAmount === amount
                    ? 'bg-green-800 text-white border-green-800'
                    : 'border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-800'
                }`}
              >
                Rs. {amount.toLocaleString()}
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
              className="py-2.5 px-3 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          {finalAmount > 0 && (
            <p className="text-xs text-green-700 font-medium">
              Rs. {finalAmount.toLocaleString()} — {finalAmount >= 10000 ? 'sponsors a full distribution event' : finalAmount >= 2500 ? 'feeds a family for a week' : finalAmount >= 500 ? 'feeds a family for a day' : 'makes a real difference'}
            </p>
          )}
        </div>

        {/* Cause selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Designate Your Donation</label>
          <select
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {CAUSES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Donor details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone (optional)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+92 3XX XXXXXXX"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Payment method tabs */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {paymentTabs.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setPaymentMethod(id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                  paymentMethod === id
                    ? 'bg-green-800 text-white border-green-800'
                    : 'border-gray-200 text-gray-600 hover:border-green-400'
                }`}
              >
                {icon} {label}
              </button>
            ))}
          </div>

          {/* Payment method details */}
          {paymentMethod === 'bank' && (
            <div className="bg-gray-50 rounded-xl p-4 text-sm border border-gray-200 space-y-1.5">
              <p className="font-semibold text-gray-900 mb-2">Bank Transfer Details</p>
              {[
                ['Bank', 'United Bank Limited (UBL)'],
                ['Account Title', 'Safia Empowerment Foundation'],
                ['Account No.', '348602382'],
                ['IBAN', 'PK87UNIL0109000348602382'],
                ['Branch', 'Wapda Town, Lahore (Code: 1346)'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-gray-500">{label}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 mt-2">Please email your transfer receipt to donate@sefngo.com</p>
            </div>
          )}

          {paymentMethod === 'jazzcash' && (
            <div className="bg-red-50 rounded-xl p-4 text-sm border border-red-100">
              <p className="font-semibold text-gray-900 mb-1">JazzCash Payment</p>
              <p className="text-gray-500">JazzCash merchant integration coming soon. Please use Bank Transfer or PayPro (Card) for now.</p>
            </div>
          )}

          {paymentMethod === 'easypaisa' && (
            <div className="bg-green-50 rounded-xl p-4 text-sm border border-green-100">
              <p className="font-semibold text-gray-900 mb-1">EasyPaisa Payment</p>
              <p className="text-gray-500">EasyPaisa merchant integration coming soon. Please use Bank Transfer or PayPro (Card) for now.</p>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="bg-blue-50 rounded-xl p-4 text-sm border border-blue-100">
              <p className="font-semibold text-gray-900 mb-1">PayPal — For International Donors</p>
              <p className="text-gray-500">PayPal integration coming soon. International donors may use bank transfer with SWIFT details.</p>
            </div>
          )}
        </div>

        {/* Submit */}
        {(paymentMethod === 'paypro') && (
          <button
            disabled={!finalAmount || !name || !email}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            <Heart className="w-5 h-5" fill="white" />
            Donate Rs. {finalAmount ? finalAmount.toLocaleString() : '—'} Now
          </button>
        )}

        <p className="text-xs text-gray-400 text-center">
          🔒 Secure payment · Licensed by SECP · Punjab Charity Commission Registered · 100% goes to beneficiaries
        </p>
      </div>
    </div>
  )
}
