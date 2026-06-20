import { defineType, defineField } from 'sanity'

export const bridalPackage = defineType({
  name: 'bridalPackage',
  title: 'Bridal Packages (All in One)',
  type: 'document',
  description: 'HOME PAGE > All bridal packages in one place. Only 1 document needed. APPEND or edit packages below.',
  fields: [
    defineField({
      name: 'title',
      title: 'Label (for your reference)',
      type: 'string',
      description: 'Just a name so you know what this is.',
      initialValue: 'Bridal Packages',
    }),
    defineField({
      name: 'packages',
      title: 'Bridal Package Tiers',
      type: 'array',
      description: 'APPEND a package tier (Timeless Elegance, Picture-Perfect Glow, etc.) and fill in price and details.',
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
              description: 'e.g. "Timeless Elegance", "Picture-Perfect Glow"',
            },
            {
              name: 'price',
              title: 'Price (Rs)',
              type: 'number',
              description: 'Price in rupees (e.g. 15000 for Rs 15,000).',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              description: 'What this package includes.',
            },
            {
              name: 'features',
              title: 'Features List',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'APPEND bullet points of what is included. Each entry is one bullet.',
            },
            {
              name: 'badge',
              title: 'Badge Text',
              type: 'string',
              description: 'Optional badge like "Most Popular" or "Best Value". Leave empty for no badge.',
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
