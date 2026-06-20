import { defineType, defineField } from 'sanity'

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation Menu Item',
  type: 'document',
  description: 'NAVBAR (top menu). APPEND one document per menu item. Shows in order in the top navigation bar.',
  fields: [
    defineField({
      name: 'label',
      title: 'Menu Label',
      type: 'string',
      description: 'REPLACE: Text that shows in the navigation bar (e.g. "Home", "Makeup", "Gallery").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'REPLACE: Where this link goes (e.g. "/", "/makeup", "/gallery", "/booking"). Start with "/".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order in the navbar (1 = leftmost, 2 = next, etc.).',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'label', subtitle: 'link' },
  },
})
