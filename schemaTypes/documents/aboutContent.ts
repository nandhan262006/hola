import { defineType, defineField } from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Section (Homepage)',
  type: 'document',
  description: 'HOME PAGE > About Us Section. Only 1 document needed. REPLACE content to update your brand story.',
  fields: [
    defineField({
      name: 'ownerPhoto',
      title: 'Owner Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Photo of the owner/team that shows in the About section.',
    }),
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      description: 'REPLACE: Name of the business owner (e.g. "Lasya").',
    }),
    defineField({
      name: 'story',
      title: 'Brand Story',
      type: 'text',
      rows: 6,
      description: 'REPLACE: The main about text — your story, experience, and what makes you special.',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Experience (Number)',
      type: 'number',
      description: 'REPLACE: Number of years of experience (e.g. 6). Shows in the badge.',
    }),
    defineField({
      name: 'experienceLabel',
      title: 'Experience Badge Label',
      type: 'string',
      description: 'REPLACE: Text next to the years (e.g. "+ Years of Exp").',
      initialValue: '+ Years of Exp',
    }),
  ],
  preview: {
    select: { title: 'ownerName', subtitle: 'story', media: 'ownerPhoto' },
  },
})
