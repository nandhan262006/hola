import BookingContent from './BookingContent'

export const metadata = {
  title: 'Book Appointment – Hola Beauty Parlour',
  description: 'Book your beauty appointment at Hola Beauty Parlour in Nellore. Bridal makeup, party makeup, facials, hair styling & home parlour services. Call +91 94909 39727 or book online.',
  keywords: ['book appointment Nellore', 'beauty parlour booking', 'bridal makeup booking Nellore', 'Hola Beauty appointment', 'salon booking Nellore', 'ladies parlour appointment'],
  openGraph: {
    title: 'Book Appointment – Hola Beauty Parlour',
    description: 'Book your bridal, party, or parlour appointment at Hola Beauty in Nellore.',
    images: [{ url: '/images/bride-hero.png', width: 1200, height: 630, alt: 'Book Hola Beauty Parlour' }],
  },
}

export default function BookingPage() {
  return <BookingContent />
}
