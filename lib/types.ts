// ============================================================
// SEF Website — Shared TypeScript Interfaces
// Maps 1-to-1 with Sanity schema document types
// ============================================================

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface Slug {
  _type: 'slug'
  current: string
}

// --- Blog Post ---
export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: Slug
  publishedAt: string
  author?: string
  category: 'news' | 'events' | 'impact-stories' | 'announcements' | 'press-releases'
  featuredImage?: SanityImage
  excerpt: string
  body: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
}

// --- Gallery Item ---
export interface GalleryItem {
  _id: string
  _type: 'galleryItem'
  title: string
  mediaType: 'photo' | 'video'
  image?: SanityImage
  videoUrl?: string
  category: 'food' | 'clothing' | 'medical' | 'livelihood' | 'team'
  date: string
  caption?: string
}

// --- Program ---
export interface Program {
  _id: string
  _type: 'program'
  name: string
  slug: Slug
  icon: string
  shortDescription: string
  fullDescription: PortableTextBlock[]
  howToHelp: string
  featuredImage?: SanityImage
  isActive: boolean
  order: number
}

// --- Team Member ---
export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  photo?: SanityImage
  bio: string
  order: number
}

// --- Impact Stat ---
export interface ImpactStat {
  _id: string
  _type: 'impactStat'
  label: string
  value: number
  suffix?: string
  icon: string
  order: number
}

// --- Testimonial ---
export interface Testimonial {
  _id: string
  _type: 'testimonial'
  beneficiaryName: string
  quote: string
  photo?: SanityImage
  program?: { _ref: string }
  isActive: boolean
}

// --- Donation Campaign ---
export interface DonationCampaign {
  _id: string
  _type: 'donationCampaign'
  title: string
  targetAmount: number
  currentAmount: number
  deadline?: string
  isActive: boolean
  description: string
}

// Portable Text block type (simplified)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any
