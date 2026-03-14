import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { getLatestPosts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const categoryLabels: Record<string, string> = {
  'news': 'News',
  'events': 'Events',
  'impact-stories': 'Impact Story',
  'announcements': 'Announcement',
  'press-releases': 'Press Release',
}

export default async function NewsPreview() {
  const posts = await getLatestPosts(3).catch(() => [])

  if (posts.length === 0) {
    return null // Hide section until CMS has posts
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest from the Field</h2>
            <p className="text-gray-500 mt-2">Stories, updates, and impact from our teams on the ground.</p>
          </div>
          <Link href="/news" className="hidden sm:flex items-center gap-1 text-green-700 font-semibold hover:gap-2 transition-all text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-shadow group">
              {post.featuredImage && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={urlFor(post.featuredImage).width(600).height(400).url()}
                    alt={post.featuredImage.alt ?? post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                    {categoryLabels[post.category] ?? post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-PK', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>
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

        <div className="mt-8 text-center sm:hidden">
          <Link href="/news" className="inline-flex items-center gap-1 text-green-700 font-semibold">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
