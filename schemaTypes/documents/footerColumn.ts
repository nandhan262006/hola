import { defineType, defineField } from 'sanity'

export const footerColumn = defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'document',
  description: 'FOOTER (bottom of every page). APPEND one document per column in the footer. Each column has a heading and list of items.',
  fields: [
    defineField({
      name: 'heading',
      title: 'Column Heading',
      type: 'string',
      description: 'REPLACE: The heading of this footer column (e.g. "Quick Links", "Contact Us").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      description: 'APPEND: Each item is one line in the footer column. For links, include the URL. For text, leave link empty.',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            { name: 'label', title: 'Label', type: 'string', description: 'The text to show (e.g. "About Us", "+91 94909 39727").' },
            { name: 'link', title: 'Link (optional)', type: 'string', description: 'Optional URL if this is a clickable link.' },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order of this column (1, 2, 3... left to right).',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'heading' },
  },
})
