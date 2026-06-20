import { defineType, defineField } from 'sanity'

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat Counter (Homepage Stats)',
  type: 'document',
  description: 'HOME PAGE > Stats Section. APPEND multiple items here. Each stat shows a number that counts up (e.g. "1000+ Happy Brides").',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      description: 'REPLACE: The number to display (e.g. 1000). It will count up with animation.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'REPLACE: Text after the number (e.g. "+"). Leave empty if not needed.',
      initialValue: '+',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'REPLACE: Text below the number (e.g. "Happy Brides").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'REPLACE: Order to show stats (1, 2, 3, 4).',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      description: 'REPLACE: Optional small icon above the number.',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'label', subtitle: 'number' },
    prepare({ title, subtitle }) {
      return { title: subtitle + ' ' + title, subtitle: 'Stat Counter' }
    },
  },
})
