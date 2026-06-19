import HomeContent from './HomeContent'

export const metadata = {
  title: 'Hola Beauty Parlour – Best Ladies Beauty Parlour in Nellore',
  description: 'Nellore\'s top-rated ladies beauty parlour. Bridal makeup, HD makeup, airbrush makeup, hair styling, facials, waxing, spa & home parlour services. 4.9⭐ rated. Book your appointment today!',
  keywords: ['beauty parlour in Nellore', 'ladies beauty parlour', 'bridal makeup Nellore', 'HD makeup Nellore', 'airbrush makeup Nellore', 'home parlour services Nellore', 'hair salon Nellore', 'facial Nellore', 'Hola Beauty Parlour', 'best parlour in Nellore', 'beauty services Nellore', 'party makeup Nellore', 'engagement makeup Nellore'],
  openGraph: {
    title: 'Hola Beauty Parlour – Best Ladies Beauty Parlour in Nellore',
    description: 'Nellore\'s top-rated beauty parlour for ladies. Bridal, HD & airbrush makeup, hair, facials & home parlour. 4.9⭐',
    images: [{ url: '/images/bride-hero.png', width: 1200, height: 630, alt: 'Hola Beauty Parlour – Bridal Makeup Nellore' }],
  },
}

export default function Home() {
  return <HomeContent />
}
