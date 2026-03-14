// ============================================================
// SEF Website — Sanity GROQ Queries
// All data fetching goes through these typed query functions
// ============================================================

import { client } from './client'
import type {
  BlogPost,
  GalleryItem,
  Program,
  TeamMember,
  ImpactStat,
  Testimonial,
  DonationCampaign,
} from '@/lib/types'

// --- Blog Posts ---

export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) [0...$count] {
      _id, title, slug, publishedAt, author, category, featuredImage, excerpt
    }`,
    { count: count - 1 }
  )
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, author, category, featuredImage, excerpt
    }`
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, author, category, featuredImage, excerpt, body,
      seoTitle, seoDescription
    }`,
    { slug }
  )
}

// --- Gallery ---

export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  const filter = category
    ? `*[_type == "galleryItem" && category == $category]`
    : `*[_type == "galleryItem"]`
  return client.fetch(
    `${filter} | order(date desc) { _id, title, mediaType, image, videoUrl, category, date, caption }`,
    { category }
  )
}

export async function getLatestGalleryItems(count = 6): Promise<GalleryItem[]> {
  return client.fetch(
    `*[_type == "galleryItem" && mediaType == "photo"] | order(date desc) [0...$count] {
      _id, title, image, category, date, caption
    }`,
    { count: count - 1 }
  )
}

// --- Programs ---

export async function getActivePrograms(): Promise<Program[]> {
  return client.fetch(
    `*[_type == "program" && isActive == true] | order(order asc) {
      _id, name, slug, icon, shortDescription, howToHelp, featuredImage, order
    }`
  )
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  return client.fetch(
    `*[_type == "program" && slug.current == $slug][0] {
      _id, name, slug, icon, shortDescription, fullDescription, howToHelp, featuredImage
    }`,
    { slug }
  )
}

// --- Team Members ---

export async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, photo, bio, order
    }`
  )
}

// --- Impact Stats ---

export async function getImpactStats(): Promise<ImpactStat[]> {
  return client.fetch(
    `*[_type == "impactStat"] | order(order asc) {
      _id, label, value, suffix, icon, order
    }`
  )
}

// --- Testimonials ---

export async function getActiveTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && isActive == true] {
      _id, beneficiaryName, quote, photo
    }`
  )
}

// --- Donation Campaigns ---

export async function getActiveCampaign(): Promise<DonationCampaign | null> {
  return client.fetch(
    `*[_type == "donationCampaign" && isActive == true] | order(_createdAt desc) [0] {
      _id, title, description, targetAmount, currentAmount, deadline
    }`
  )
}
