import { defineType, defineField } from 'sanity'

export const howItWorksStep = defineType({
  name: 'howItWorksStep',
  title: 'How It Works Step (Home Parlour Page)',
  type: 'document',
  description: 'HOME PARLOUR PAGE > "How It Works" Section. APPEND steps to explain your process (e.g. WhatsApp -> Confirm -> Arrive -> Done).',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      description: 'REPLACE: Step number (1, 2, 3, 4). Controls display order.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      description: 'REPLACE: Short title for the step (e.g. "WhatsApp Us", "We Arrive").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'REPLACE: Brief explanation of this step.',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      description: 'REPLACE: Optional small icon for this step.',
    }),
  ],
  orderings: [
    { title: 'Step Number', name: 'stepNumber', by: [{ field: 'stepNumber', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'stepNumber' },
    prepare({ title, subtitle }) {
      return { title: 'Step ' + subtitle + ': ' + title, subtitle: 'How It Works' }
    },
  },
})
