'use client'

/**
 * Sanity Studio embedded at /studio
 * Only accessible by SEF staff — not linked from public navigation
 * Access: sefngo.com/studio
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
