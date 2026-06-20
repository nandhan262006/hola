import { defineType, defineField } from 'sanity'

export const bridalPackage = defineType({
  name: 'bridalPackage',
  title: 'Bridal Package (Homepage)',
  type: 'document',
  description: 'HOME PAGE > Bridal Packages Section. APPEND/CREATE one document per package tier. Shows 3 packages side by side.',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'REPLACE: Name of the package (e.g. "Timeless Elegance", "Picture-Perfect Glow").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (Rs)',
      type: 'number',
      description: 'REPLACE: The actual price in rupees (e.g. 15000 for Rs 15,000).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'REPLACE: What this package includes. Shows below the price.',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'REPLACE: APPEND bullet points of what\'s included (e.g. "Professional HD Makeup", "Hair Styling"). Each entry is one bullet.',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'REPLACE: Optional badge on the card (e.g. "Most Popular", "Best Value"). Leave empty for no badge.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show packages (1, 2, 3).',
    }),
    defineField({
      name: 'image',
      title: 'Package Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Optional image for this package card.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return { title, subtitle: 'Rs ' + subtitle?.toLocaleString() || 'No price' }
    },
  },
})
