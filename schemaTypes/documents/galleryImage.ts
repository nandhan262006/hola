import { defineType, defineField } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image (Gallery Page)',
  type: 'document',
  description: 'GALLERY PAGE. APPEND multiple images here. Shows in a beautiful grid with lightbox popup.',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'APPEND: Upload an image to appear in the public gallery page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (Optional)',
      type: 'string',
      description: 'REPLACE: Optional caption that shows when image is clicked in the lightbox.',
    }),
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      description: 'REPLACE: Optional category to filter by (e.g. "bridal", "party", "hair").',
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
    select: { title: 'caption', subtitle: 'category', media: 'image' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Gallery Image', subtitle: subtitle || 'Gallery', media }
    },
  },
})
