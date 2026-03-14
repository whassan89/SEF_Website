import { Suspense } from 'react'
import HeroSection from '@/components/home/HeroSection'
import ImpactStats from '@/components/home/ImpactStats'
import ProgramsPreview from '@/components/home/ProgramsPreview'
import HowToHelp from '@/components/home/HowToHelp'
import NewsPreview from '@/components/home/NewsPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import DonateCTABanner from '@/components/home/DonateCTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={<div className="h-32 bg-white animate-pulse" />}>
        <ImpactStats />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <ProgramsPreview />
      </Suspense>

      <HowToHelp />

      <Suspense fallback={null}>
        <NewsPreview />
      </Suspense>

      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      <DonateCTABanner />
    </>
  )
}
