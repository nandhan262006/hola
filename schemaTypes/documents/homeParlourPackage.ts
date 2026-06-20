import { defineType, defineField } from 'sanity'

export const homeParlourPackage = defineType({
  name: 'homeParlourPackage',
  title: 'Home Parlour Package (Home Parlour Page)',
  type: 'document',
  description: 'HOME PARLOUR PAGE > Service Packages. APPEND one document per package you offer at home.',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'REPLACE: Name of the home service (e.g. "Bridal Home Package", "Home Facial").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'REPLACE: What this package includes. Shows on the service card.',
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (Rs)',
      type: 'number',
      description: 'REPLACE: Starting price or base price in rupees.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show packages (1, 2, 3...).',
    }),
    defineField({
      name: 'image',
      title: 'Package Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Optional image for this home parlour package.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'description', media: 'image' },
  },
})
