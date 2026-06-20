import ParlourContent from './ParlourContent'
import { getServiceImageUrl } from '@/lib/getServiceImage'

export const metadata = {
  title: 'Parlour Services – Hair, Facial, Waxing, Spa & More',
  description: 'Complete ladies parlour services in Nellore: hair styling, facials, waxing, threading, bleach, d-tan, hair spa, hair coloring, manicure, pedicure, body spa & bridal packages. Premium care at Hola Beauty.',
  keywords: ['parlour services Nellore', 'hair styling Nellore', 'facial Nellore', 'waxing Nellore', 'threading Nellore', 'hair spa Nellore', 'hair coloring Nellore', 'manicure pedicure Nellore', 'ladies parlour Nellore', 'beauty salon Nellore'],
  alternates: {
    canonical: 'https://holabeauty.in/parlour',
  },
  openGraph: {
    title: 'Parlour Services – Hola Beauty Parlour Nellore',
    description: 'Complete ladies parlour services: hair, facials, waxing, spa, threading, bridal packages & more.',
    images: [{ url: '/images/parlour.jpeg', width: 1200, height: 630, alt: 'Hola Beauty Parlour Services' }],
  },
}

export default async function ParlourPage() {
  const heroImage = await getServiceImageUrl('parlour')
  return <ParlourContent heroImage={heroImage} />
}
