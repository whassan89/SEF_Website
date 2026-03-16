'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Play } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import type { GalleryItem } from '@/lib/types'

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'food', label: 'Food Distribution' },
  { value: 'clothing', label: 'Clothing Drive' },
  { value: 'medical', label: 'Medical Aid' },
  { value: 'livelihood', label: 'Livelihood' },
  { value: 'team', label: 'Team' },
]

interface Props { items: GalleryItem[] }

export default function GalleryGrid({ items }: Props) {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = filter === 'all' ? items : items.filter((i) => i.category === filter)
  const photos = filtered.filter((i) => i.mediaType === 'photo')
  const videos = filtered.filter((i) => i.mediaType === 'video')

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filter === value
                ? 'bg-green-800 text-white border-green-800'
                : 'border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      {photos.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {photos.map((item) => (
              <button
                key={item._id}
                onClick={() => setLightbox(item)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).width(400).height(400).url()}
                    alt={item.caption ?? item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-2 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-xs font-medium line-clamp-2">{item.caption ?? item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Video grid */}
      {videos.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((item) => (
              <div key={item._id} className="rounded-xl overflow-hidden border border-gray-200">
                {item.videoUrl && (
                  <div className="aspect-video bg-black">
                    {item.videoUrl.includes('cdn.sanity.io') ? (
                      <video
                        src={item.videoUrl}
                        controls
                        preload="metadata"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <iframe
                        src={item.videoUrl.includes('youtube.com/watch') ? item.videoUrl.replace('watch?v=', 'embed/') : item.videoUrl}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    )}
                  </div>
                )}
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                  {item.caption && <p className="text-xs text-gray-500 mt-0.5">{item.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Play className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No gallery items in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {lightbox.image && (
              <div className="relative w-full max-h-[85vh] aspect-video">
                <Image
                  src={urlFor(lightbox.image).width(1200).url()}
                  alt={lightbox.caption ?? lightbox.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {lightbox.caption && (
              <p className="text-white text-center text-sm mt-3 opacity-80">{lightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
