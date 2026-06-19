export default function JsonLd() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
