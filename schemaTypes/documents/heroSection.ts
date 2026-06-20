import { defineType, defineField } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section (Homepage Banner)',
  type: 'document',
  description: 'HOME PAGE > Top Banner (Hero). Only 1 document needed. REPLACE content to change the big banner at the top of your homepage.',
  fields: [
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video (Desktop)',
      type: 'file',
      description: 'REPLACE: Upload a video file for the hero background on desktop. Leave empty to use the fallback image.',
    }),
    defineField({
      name: 'backgroundVideoMobile',
      title: 'Background Video (Mobile)',
      type: 'file',
      description: 'REPLACE: Upload a smaller video for mobile phones. Leave empty to use the desktop video.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Fallback Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: Shows behind the hero text if no video is set, or while video loads.',
    }),
    defineField({
      name: 'heroMainImage',
      title: 'Hero Bride Image',
      type: 'image',
      options: { hotspot: true },
      description: 'REPLACE: The main bride/hero image that appears on the right side of the banner.',
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'REPLACE: The big gold text (e.g. "HOLA"). Shows in center of hero banner.',
      initialValue: 'HOLA',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'REPLACE: Small text below heading (e.g. "Hair | Beauty | Makeup").',
      initialValue: 'Hair | Beauty | Makeup',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'REPLACE: The fancy cursive text (e.g. "Where Beauty Meets Perfection").',
      initialValue: 'Where Beauty Meets Perfection',
    }),
    defineField({
      name: 'button1Text',
      title: 'Button 1 Text',
      type: 'string',
      description: 'REPLACE: First CTA button label (e.g. "Book Appointment").',
      initialValue: 'Book Appointment',
    }),
    defineField({
      name: 'button1Link',
      title: 'Button 1 Link',
      type: 'string',
      description: 'REPLACE: Where Button 1 goes (e.g. "/booking").',
      initialValue: '/booking',
    }),
    defineField({
      name: 'button2Text',
      title: 'Button 2 Text',
      type: 'string',
      description: 'REPLACE: Second CTA button label (e.g. "Explore Services").',
      initialValue: 'Explore Services',
    }),
    defineField({
      name: 'button2Link',
      title: 'Button 2 Link',
      type: 'string',
      description: 'REPLACE: Where Button 2 goes (e.g. "/makeup").',
      initialValue: '/makeup',
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'tagline' },
  },
})
