import { defineType, defineField } from 'sanity'

export const makeupPricing = defineType({
  name: 'makeupPricing',
  title: 'Makeup Prices (All in One)',
  type: 'document',
  description: 'MAKEUP PAGE > All prices in one place. Only 1 document needed. APPEND or edit categories in the list below.',
  fields: [
    defineField({
      name: 'title',
      title: 'Label (for your reference)',
      type: 'string',
      description: 'Just a name so you know what this is.',
      initialValue: 'Makeup Prices',
    }),
    defineField({
      name: 'categories',
      title: 'Makeup Categories with Prices',
      type: 'array',
      description: 'APPEND a new category (Party, Bridal, Engagement, etc.) and set its pricing tiers.',
      of: [
        {
          type: 'object',
          name: 'category',
          title: 'Category',
          fields: [
            {
              name: 'categoryName',
              title: 'Category Name',
              type: 'string',
              description: 'e.g. "Party Makeup", "Bridal Makeup"',
            },
            {
              name: 'tiers',
              title: 'Pricing Tiers (Normal / HD / Premium)',
              type: 'array',
              description: 'Add Normal, HD, and Premium pricing.',
              of: [
                {
                  type: 'object',
                  name: 'tier',
                  title: 'Tier',
                  fields: [
                    { name: 'label', title: 'Tier Label', type: 'string', description: 'e.g. "Normal", "HD", "Premium"' },
                    { name: 'price', title: 'Price (Rs)', type: 'number', description: 'Price in rupees.' },
                    { name: 'isPopular', title: 'Mark as Popular', type: 'boolean', description: 'Toggle ON for the most popular tier.' },
                  ],
                },
              ],
            },
            {
              name: 'image',
              title: 'Category Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional image for this category.',
            },
          ],
          preview: {
            select: { title: 'categoryName' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
