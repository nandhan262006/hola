import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingButtons from '@/components/FloatingButtons'
import DiscountPopup from '@/components/DiscountPopup'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: {
    default: 'Hola Beauty Parlour – Best Ladies Beauty Parlour in Nellore',
    template: '%s | Hola Beauty Parlour',
  },
  description: 'Nellore\'s top-rated beauty parlour for ladies. Professional bridal makeup, HD makeup, airbrush makeup, hair styling, facials, waxing, spa & home parlour services. 4.9⭐ rated. Book now!',
  keywords: ['beauty parlour in Nellore', 'ladies beauty parlour', 'bridal makeup Nellore', 'HD makeup Nellore', 'airbrush makeup Nellore', 'home parlour services Nellore', 'hair salon Nellore', 'facial Nellore', 'Hola Beauty Parlour', 'best parlour in Nellore', 'beauty services Nellore', 'party makeup Nellore', 'engagement makeup Nellore'],
  authors: [{ name: 'Hola Beauty Parlour' }],
  creator: 'Hola Beauty Parlour',
  publisher: 'Hola Beauty Parlour',
  metadataBase: new URL('https://holabeauty.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Hola Beauty Parlour',
    title: 'Hola Beauty Parlour – Best Ladies Beauty Parlour in Nellore',
    description: 'Nellore\'s top-rated beauty parlour for ladies. Bridal makeup, HD makeup, airbrush makeup, hair, skincare & home parlour services by expert artists. 4.9⭐',
    url: 'https://holabeauty.in',
    images: [{ url: '/images/bride-hero.png', width: 1200, height: 630, alt: 'Hola Beauty Parlour – Bridal Makeup Nellore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hola Beauty Parlour – Best Ladies Beauty Parlour in Nellore',
    description: 'Nellore\'s top-rated beauty parlour for ladies. Bridal, HD & airbrush makeup, hair, facials & home parlour. Book now!',
    images: ['/images/bride-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // Replace with your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://holabeauty.in',
    languages: {
      'en-IN': 'https://holabeauty.in',
    },
  },
}

export default function RootLayout({ children }) {
  return (
      <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{background:'#0a0000',color:'#fff',margin:0,padding:0}}>
        <Navbar />
        <main style={{overflowX:'hidden'}}>{children}</main>
        <JsonLd />
        <FloatingButtons />
        <DiscountPopup />
      </body>
    </html>
  )
}
