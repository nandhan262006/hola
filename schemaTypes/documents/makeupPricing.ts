import { defineType, defineField } from 'sanity'

export const makeupPricing = defineType({
  name: 'makeupPricing',
  title: 'Makeup Service (Pricing Page)',
  type: 'document',
  description: 'MAKEUP PAGE > Pricing Section. APPEND one document per makeup category (Party, Bridal, Engagement, etc.).',
  fields: [
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      description: 'REPLACE: Name of the makeup category (e.g. "Party Makeup", "Bridal Makeup").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show categories (1, 2, 3...).',
    }),
    defineField({
      name: 'tiers',
      title: 'Pricing Tiers',
      type: 'array',
      description: 'APPEND: Add Normal, HD, and Premium pricing tiers for this category.',
      of: [
        {
          type: 'object',
          name: 'tier',
          title: 'Tier',
          fields: [
            { name: 'label', title: 'Tier Label', type: 'string', description: 'e.g. "Normal", "HD", "Premium"' },
            { name: 'price', title: 'Price (Rs)', type: 'number', description: 'The price in rupees.' },
            { name: 'isPopular', title: 'Mark as Popular', type: 'boolean', description: 'Toggle ON if this is the most popular tier.' },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Optional image for this makeup category card.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'categoryName' },
  },
})
