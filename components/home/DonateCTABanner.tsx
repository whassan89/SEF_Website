import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function DonateCTABanner() {
  return (
    <section className="py-16 bg-amber-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your Rs. 500 Feeds a Family for a Day
        </h2>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          100% of your donation goes directly to beneficiaries. Licensed, transparent, and accountable.
        </p>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
        >
          <Heart className="w-5 h-5" fill="currentColor" />
          Donate Now
        </Link>
      </div>
    </section>
  )
}
