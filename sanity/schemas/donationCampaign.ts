import { defineField, defineType } from 'sanity'

export const donationCampaign = defineType({
  name: 'donationCampaign',
  title: 'Donation Campaign',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Campaign Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'targetAmount',
      title: 'Target Amount (PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'currentAmount',
      title: 'Amount Raised So Far (PKR)',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'deadline',
      title: 'Campaign Deadline',
      type: 'date',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Campaign',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'isActive',
    },
    prepare(selection: Record<string, unknown>) {
      return {
        title: selection.title as string,
        subtitle: selection.subtitle ? '✅ Active' : '❌ Inactive',
      }
    },
  },
})
