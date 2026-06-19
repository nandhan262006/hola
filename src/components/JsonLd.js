export default function JsonLd() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://holabeauty.in' },
      { '@type': 'ListItem', position: 2, name: 'Makeup Services', item: 'https://holabeauty.in/makeup' },
      { '@type': 'ListItem', position: 3, name: 'Parlour Services', item: 'https://holabeauty.in/parlour' },
      { '@type': 'ListItem', position: 4, name: 'Home Parlour Services', item: 'https://holabeauty.in/home-parlour' },
      { '@type': 'ListItem', position: 5, name: 'Gallery', item: 'https://holabeauty.in/gallery' },
      { '@type': 'ListItem', position: 6, name: 'Book Appointment', item: 'https://holabeauty.in/booking' },
      { '@type': 'ListItem', position: 7, name: 'Contact Us', item: 'https://holabeauty.in/contact' },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Hola Beauty Parlour offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hola Beauty Parlour offers bridal makeup, HD makeup, airbrush makeup, party makeup, engagement makeup, reception makeup, photo shoot makeup, hair styling, facials, waxing, threading, hair spa, hair coloring, manicure, pedicure, body spa, and home parlour services in Nellore.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Hola Beauty Parlour located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hola Beauty Parlour is located near Mahila Pranganam Gate, Santhinagar, Dycusaroad, Podalakur Rd, Andhra Kesari Nagar, Nellore-1 Rural, Andhra Pradesh 524004.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the opening hours of Hola Beauty Parlour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open Monday to Friday from 9:00 AM to 10:00 PM, Saturday from 8:00 AM to 10:00 PM, and Sunday from 9:00 AM to 6:00 PM. Public holidays are by appointment only.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Hola Beauty Parlour offer home services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Hola Beauty Parlour offers home parlour services in Nellore including bridal home packages, pre-bridal packages, party makeup, facials, waxing, hair care, manicure, pedicure, and senior citizen packages at your doorstep.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I book an appointment at Hola Beauty Parlour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book an appointment by calling +91 94909 39727, sending a WhatsApp message, messaging on Instagram @hola_makeovers, or using the online booking form on our website.',
        },
      },
      {
        '@type': 'Question',
        name: 'What bridal makeup packages are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer three bridal makeup packages: Timeless Elegance (Basic, starting at ₹15,000), Picture-Perfect Glow (HD Makeup, starting at ₹25,000), and Airbrush Perfection (Airbrush Makeup, starting at ₹35,000).',
        },
      },
    ],
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Hola Beauty Parlour',
    description: "Nellore's top-rated ladies beauty parlour offering bridal makeup, HD makeup, airbrush makeup, party makeup, hair styling, facials, waxing, spa, threading, manicure, pedicure, and home parlour services.",
    url: 'https://holabeauty.in',
    telephone: '+919490939727',
    email: 'holanellore@gmail.com',
    image: 'https://holabeauty.in/images/bride-hero.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Mahila Pranganam Gate, Santhinagar, Dycusaroad, Podalakur Rd, Andhra Kesari Nagar',
      addressLocality: 'Nellore-1 Rural',
      addressRegion: 'Andhra Pradesh',
      postalCode: '524004',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.4426,
      longitude: 79.9865,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '349',
      bestRating: '5',
    },
    priceRange: '₹₹₹',
    areaServed: [
      {
        '@type': 'City',
        name: 'Nellore',
      },
      {
        '@type': 'State',
        name: 'Andhra Pradesh',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/hola_makeovers/',
      'https://wa.me/919490939727',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bridal Makeup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HD Makeup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbrush Makeup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Party Makeup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engagement Makeup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Styling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waxing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manicure & Pedicure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Parlour Service' } },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
