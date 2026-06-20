import { defineType, defineField } from 'sanity'

export const homeParlourPackage = defineType({
  name: 'homeParlourPackage',
  title: 'Home Parlour Packages (All in One)',
  type: 'document',
  description: 'HOME PARLOUR PAGE > All home service packages in one place. Only 1 document needed. APPEND or edit packages below.',
  fields: [
    defineField({
      name: 'title',
      title: 'Label (for your reference)',
      type: 'string',
      description: 'Just a name so you know what this is.',
      initialValue: 'Home Parlour Packages',
    }),
    defineField({
      name: 'packages',
      title: 'Home Service Packages',
      type: 'array',
      description: 'APPEND a package (Bridal Home Package, Home Facial, etc.) and set price and description.',
      of: [
        {
          type: 'object',
          name: 'package',
          title: 'Package',
          fields: [
            {
              name: 'name',
              title: 'Package Name',
              type: 'string',
              description: 'e.g. "Bridal Home Package", "Home Facial"',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'What this package includes.',
            },
            {
              name: 'price',
              title: 'Starting Price (Rs)',
              type: 'number',
              description: 'Starting or base price in rupees.',
            },
            {
              name: 'image',
              title: 'Package Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional image for this package.',
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
            prepare({ title, subtitle }: { title?: string; subtitle?: number }) {
              return { title, subtitle: subtitle ? 'Rs ' + subtitle.toLocaleString() : 'No price' }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
