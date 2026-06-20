import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Page Content',
  type: 'document',
  description: 'CONTACT PAGE. Only 1 document needed. REPLACE content to update your Contact page details.',
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      rows: 2,
      description: 'REPLACE: Short introduction text at the top of the Contact page.',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      description: 'REPLACE: Your full street address for the contact page.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'REPLACE: Phone number shown on Contact page specifically.',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'REPLACE: WhatsApp number shown on Contact page.',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Handle',
      type: 'string',
      description: 'REPLACE: Instagram handle (e.g. @hola_makeovers).',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      description: 'REPLACE: Full Instagram profile URL.',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'REPLACE: Email address shown on Contact page.',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'REPLACE: Google Maps embed URL for the map on Contact page.',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'array',
      description: 'APPEND/REPLACE: Business hours table. Each row is a day with timings.',
      of: [
        {
          type: 'object',
          name: 'hoursRow',
          title: 'Hours Row',
          fields: [
            { name: 'day', title: 'Day', type: 'string', description: 'e.g. "Mon - Fri", "Saturday"' },
            { name: 'time', title: 'Time', type: 'string', description: 'e.g. "9:00 AM - 8:00 PM"' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'phone' },
    prepare({ title }) {
      return { title: title || 'Contact Info', subtitle: 'Contact Page' }
    },
  },
})
