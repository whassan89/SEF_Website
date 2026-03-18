import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { getPostBySlug } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  if (!post) notFound()

  return (
    <article className="bg-white">
      {/* Hero image */}
      {post.featuredImage && (
        <div className="relative h-64 sm:h-96 bg-gray-100">
          <Image
            src={urlFor(post.featuredImage).width(1200).height(600).url()}
            alt={post.featuredImage.alt ?? post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back link */}
        <Link href="/news" className="inline-flex items-center gap-1 text-sm text-primary-dark font-medium hover:gap-2 transition-all mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          {post.author && (
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed border-l-4 border-primary-medium pl-4">{post.excerpt}</p>

        {/* Body */}
        {post.body && (
          <div className="prose prose-gray prose-green max-w-none prose-headings:font-bold prose-a:text-primary-dark prose-img:rounded-xl">
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="my-8 relative rounded-xl overflow-hidden">
                      <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt ?? ''}
                        width={800}
                        height={450}
                        className="w-full rounded-xl"
                      />
                      {value.caption && (
                        <p className="text-center text-xs text-gray-400 mt-2">{value.caption}</p>
                      )}
                    </div>
                  ),
                },
              }}
            />
          </div>
        )}

        {/* Social share */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-3">Share this story:</p>
          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://sefngo.com/news/${post.slug.current}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} https://sefngo.com/news/${post.slug.current}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-medium text-white text-sm font-semibold rounded-lg hover:bg-primary-medium transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sefngo.com/news/${post.slug.current}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
