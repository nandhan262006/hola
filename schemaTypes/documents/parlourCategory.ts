import { defineType, defineField } from 'sanity'

export const parlourCategory = defineType({
  name: 'parlourCategory',
  title: 'Parlour Prices (All in One)',
  type: 'document',
  description: 'PARLOUR PAGE > All parlour services and prices in one place. Only 1 document needed. APPEND or edit categories below.',
  fields: [
    defineField({
      name: 'title',
      title: 'Label (for your reference)',
      type: 'string',
      description: 'Just a name so you know what this is.',
      initialValue: 'Parlour Prices',
    }),
    defineField({
      name: 'categories',
      title: 'Parlour Service Categories with Prices',
      type: 'array',
      description: 'APPEND a new category (Threading, Facial, Bleach, etc.) and add service items with prices.',
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
              description: 'e.g. "Threading", "Facial", "Bleach"',
            },
            {
              name: 'items',
              title: 'Service Items (with Prices)',
              type: 'array',
              description: 'Add individual services and their prices under this category.',
              of: [
                {
                  type: 'object',
                  name: 'item',
                  title: 'Service Item',
                  fields: [
                    { name: 'name', title: 'Service Name', type: 'string', description: 'e.g. "Eyebrow Threading"' },
                    { name: 'price', title: 'Price (Rs)', type: 'number', description: 'Price in rupees.' },
                  ],
                },
              ],
            },
            {
              name: 'image',
              title: 'Category Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional image for this category card.',
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
