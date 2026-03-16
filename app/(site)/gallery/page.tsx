import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import GalleryGrid from '@/components/shared/GalleryGrid'
import { getGalleryItems } from '@/sanity/lib/queries'

export const revalidate = 60 // refetch from Sanity every 60 seconds

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos and videos from SEF field activities — food distribution, clothing drives, medical camps, and livelihood programs across Punjab.',
}

export default async function GalleryPage() {
  const items = await getGalleryItems().catch(() => [])

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Real people, real impact — from the field to your screen."
        breadcrumb="Gallery"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">🖼️</p>
              <p className="text-lg font-medium">Gallery coming soon</p>
              <p className="text-sm mt-2">Our team is uploading photos and videos. Check back shortly.</p>
            </div>
          ) : (
            <GalleryGrid items={items} />
          )}
        </div>
      </section>
    </>
  )
}
