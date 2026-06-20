import { defineType, defineField } from 'sanity'

export const portfolioImage = defineType({
  name: 'portfolioImage',
  title: 'Portfolio Image (Homepage Gallery)',
  type: 'document',
  description: 'HOME PAGE > Portfolio Section. APPEND multiple images here. Shows in a grid with lightbox popup.',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'APPEND: Upload a portfolio photo. It will appear in the homepage portfolio grid.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (Optional)',
      type: 'string',
      description: 'REPLACE: Optional text caption that shows when image is clicked.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show images (1, 2, 3...).',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Portfolio Image', subtitle: 'Portfolio', media }
    },
  },
})
