import Link from 'next/link'
import { Heart, Shield, Award } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-deep">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary to-primary-darker opacity-95" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-20">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-primary-muted mb-8 backdrop-blur-sm">
          <Shield className="w-4 h-4 text-accent-medium" />
          SECP Licensed · Punjab Charity Commission Registered
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Empowering Lives,{' '}
          <span className="text-accent-medium">Restoring Dignity</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-muted max-w-2xl mx-auto mb-4">
          Providing food, clothing, and medical help to homeless individuals
          across Punjab — and empowering them toward self-sufficiency.
        </p>

        <p className="text-sm text-primary-light mb-10">
          Operating across Lahore and multiple cities in Punjab, Pakistan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-accent/30 w-full sm:w-auto justify-center"
          >
            <Heart className="w-5 h-5" fill="white" />
            Donate Now
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            Learn More
          </Link>
        </div>

        {/* License badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 border border-white/10">
            <Award className="w-4 h-4 text-accent-medium" />
            <div className="text-left">
              <p className="text-xs text-primary-light">Licensed by</p>
              <p className="text-xs font-semibold text-white">SECP · Section 42</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 border border-white/10">
            <Award className="w-4 h-4 text-accent-medium" />
            <div className="text-left">
              <p className="text-xs text-primary-light">Registered with</p>
              <p className="text-xs font-semibold text-white">Punjab Charity Commission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
