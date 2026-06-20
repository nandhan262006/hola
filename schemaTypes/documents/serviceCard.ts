import { defineType, defineField } from 'sanity'

export const serviceCard = defineType({
  name: 'serviceCard',
  title: 'Service Card (Homepage Services)',
  type: 'document',
  description: 'HOME PAGE > Services Section. CREATE one document per service (Makeup, Parlour, Home Parlour). APPEND new services here.',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'REPLACE: Name of the service (e.g. "Makeup", "Parlour", "Home Parlour"). Shows on the card.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      description: 'REPLACE: The web address for this service page (e.g. "makeup"). Click "Generate" from title.',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'REPLACE: A short description that appears below the service name on the card.',
    }),
    defineField({
      name: 'image',
      title: 'Card Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: The image shown on the service card.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show cards (1 = first, 2 = second, etc.).',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'image' },
  },
})
