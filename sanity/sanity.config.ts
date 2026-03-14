import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'sef-website',
  title: 'SEF Website CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('SEF Content')
          .items([
            S.listItem()
              .title('📰 Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.listItem()
              .title('🖼️ Gallery')
              .child(S.documentTypeList('galleryItem').title('Gallery Items')),
            S.listItem()
              .title('🤲 Programs')
              .child(S.documentTypeList('program').title('Programs')),
            S.listItem()
              .title('👥 Team Members')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem()
              .title('📊 Impact Statistics')
              .child(S.documentTypeList('impactStat').title('Impact Stats')),
            S.listItem()
              .title('💬 Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('💰 Donation Campaigns')
              .child(S.documentTypeList('donationCampaign').title('Campaigns')),
          ]),
    }),
    visionTool(), // GROQ query playground — dev only
  ],

  schema: {
    types: schemaTypes,
  },
})
