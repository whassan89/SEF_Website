'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Play, MapPin, Calendar, Target, FileText } from 'lucide-react'
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

const CATEGORY_LABELS: Record<string, string> = {
  food: 'Food Distribution',
  clothing: 'Clothing Drive',
  medical: 'Medical Aid',
  livelihood: 'Livelihood Empowerment',
  team: 'Team Activity',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-PK', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

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
                ? 'bg-primary text-white border-primary'
                : 'border-gray-300 text-gray-600 hover:border-primary-medium hover:text-primary'
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

      {/* Video list — left video, right brief */}
      {videos.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Videos</h2>
          <div className="space-y-6">
            {videos.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                {/* Left — video player */}
                <div className="md:w-3/5 bg-black flex-shrink-0">
                  {item.videoUrl && (
                    <div className="aspect-video w-full h-full">
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
                </div>

                {/* Right — info brief */}
                <div className="md:w-2/5 p-6 flex flex-col justify-center gap-4 bg-white">
                  {item.serialNumber && (
                    <span className="inline-block text-xs font-bold text-primary bg-primary-subtle px-2 py-0.5 rounded w-fit">
                      #{item.serialNumber}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{item.title}</h3>

                  <div className="space-y-3">
                    {item.location && (
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Location</p>
                          <p className="text-sm text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</p>
                        <p className="text-sm text-gray-700">{formatDate(item.date)}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Drive For</p>
                        <p className="text-sm text-gray-700">{CATEGORY_LABELS[item.category] ?? item.category}</p>
                      </div>
                    </div>

                    {item.caption && (
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Description</p>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{item.caption}</p>
                        </div>
                      </div>
                    )}
                  </div>
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
