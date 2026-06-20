import { defineType, defineField } from 'sanity'

export const parlourCategory = defineType({
  name: 'parlourCategory',
  title: 'Parlour Service (Parlour Page)',
  type: 'document',
  description: 'PARLOUR PAGE > Services Grid. APPEND one document per parlour service category (Threading, Bleach, Facial, etc.).',
  fields: [
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      description: 'REPLACE: Name of the parlour service (e.g. "Threading", "Facial", "Bleach").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show categories (1, 2, 3...).',
    }),
    defineField({
      name: 'items',
      title: 'Service Items (with Prices)',
      type: 'array',
      description: 'APPEND: Add individual services under this category with their prices.',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Service Item',
          fields: [
            { name: 'name', title: 'Service Name', type: 'string', description: 'e.g. "Eyebrow Threading"' },
            { name: 'price', title: 'Price (Rs)', type: 'number', description: 'The price in rupees.' },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Optional image for this parlour service card.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'categoryName' },
  },
})
