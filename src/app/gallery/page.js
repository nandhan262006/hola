import GalleryContent from './GalleryContent'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata = {
  title: 'Gallery – Bridal Makeup & Beauty Portfolio',
  description: 'Browse our portfolio of bridal makeup, party makeup, hair styling, facials, and beauty transformations at Hola Beauty Parlour in Nellore.',
  keywords: ['bridal makeup gallery Nellore', 'beauty parlour portfolio', 'makeup before after Nellore', 'Hola Beauty gallery', 'bridal looks Nellore'],
  openGraph: {
    title: 'Gallery – Hola Beauty Parlour Nellore',
    description: 'See our bridal makeup, hair, facial & beauty transformations portfolio.',
    images: [{ url: '/images/bride-hero.png', width: 1200, height: 630, alt: 'Hola Beauty Parlour Gallery' }],
  },
}

export default function GalleryPage() {
  return (
    <ErrorBoundary>
      <GalleryContent />
    </ErrorBoundary>
  )
}
