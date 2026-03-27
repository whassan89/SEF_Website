import { defineField, defineType } from 'sanity'
import { AutoSerialNumberInput } from '../actions/autoSerialNumber'

export const galleryItem = defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'serialNumber',
      title: 'Serial Number',
      type: 'number',
      description: 'Auto-assigned unique tracking number. Do not edit manually.',
      readOnly: true,
      components: { input: AutoSerialNumberInput },
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
      hidden: ({ document }) => document?.mediaType !== 'photo',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube or Vimeo)',
      type: 'url',
      hidden: ({ document }) => document?.mediaType !== 'video',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food Distribution', value: 'food' },
          { title: 'Clothing Drive', value: 'clothing' },
          { title: 'Medical Aid', value: 'medical' },
          { title: 'Livelihood Empowerment', value: 'livelihood' },
          { title: 'Team', value: 'team' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Wapda Town, Lahore — displayed in the video info panel',
    }),
    defineField({
      name: 'caption',
      title: 'Description (max 3 lines)',
      type: 'text',
      rows: 3,
      description: 'Short description shown beside the video. Keep it to 3 lines.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
      serial: 'serialNumber',
    },
    prepare({ title, media, subtitle, serial }) {
      return {
        title: serial ? `#${serial} — ${title}` : title,
        media,
        subtitle,
      }
    },
  },
  orderings: [
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
