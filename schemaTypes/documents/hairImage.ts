import { defineType, defineField } from 'sanity'

export const hairImage = defineType({
  name: 'hairImage',
  title: 'Hairdressing Carousel (Homepage)',
  type: 'document',
  description: 'HOME PAGE > Hairdressing Section (infinite scrolling carousel). APPEND multiple images to add to the carousel.',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'APPEND: Upload a hairstyle photo. It will scroll infinitely in the carousel.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show images in the carousel.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { media: 'image' },
    prepare({ media }) {
      return { title: 'Hair Image', subtitle: 'Hair Carousel', media }
    },
  },
})
