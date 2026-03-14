// Central export — all Sanity document type schemas
import { blogPost } from './blogPost'
import { galleryItem } from './galleryItem'
import { program } from './program'
import { teamMember } from './teamMember'
import { impactStat } from './impactStat'
import { testimonial } from './testimonial'
import { donationCampaign } from './donationCampaign'

export const schemaTypes = [
  blogPost,
  galleryItem,
  program,
  teamMember,
  impactStat,
  testimonial,
  donationCampaign,
]
