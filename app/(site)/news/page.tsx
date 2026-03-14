import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { getAllPosts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'News & Blog',
  description: 'Latest news, impact stories, events and announcements from Safia Empowerment Foundation.',
}

const CATEGORY_LABELS: Record<string, string> = {
  'news': 'News',
  'events': 'Events',
  'impact-stories': 'Impact Story',
  'announcements': 'Announcement',
  'press-releases': 'Press Release',
}

const CATEGORY_COLORS: Record<string, string> = {
  'news': 'bg-blue-50 text-blue-700',
  'events': 'bg-purple-50 text-purple-700',
  'impact-stories': 'bg-green-50 text-green-700',
  'announcements': 'bg-amber-50 text-amber-700',
  'press-releases': 'bg-gray-100 text-gray-700',
}

export default async function NewsPage() {
  const posts = await getAllPosts().catch(() => [])

  return (
    <>
      <PageHero
        title="News & Blog"
        subtitle="Stories of impact, program updates, and announcements from the field."
        breadcrumb="News"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">📰</p>
              <p className="text-lg font-medium">Articles coming soon</p>
              <p className="text-sm mt-2">Our first stories will be published shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-shadow group">
                  {post.featuredImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage).width(600).height(384).url()}
                        alt={post.featuredImage.alt ?? post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                        {CATEGORY_LABELS[post.category] ?? post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-PK', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </span>
                    </div>
                    <h2 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-3 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/news/${post.slug.current}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
