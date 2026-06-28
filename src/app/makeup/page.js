import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { SectionTitle, BookingCTA, boostPrice } from '@/components/SharedPage'

export const metadata = {
  title: 'Makeup Services – Bridal, HD, Airbrush & Party Makeup',
  description: 'Professional bridal makeup, HD makeup, airbrush makeup, engagement makeup, reception makeup, party makeup, and photo shoot makeup in Nellore. Book your bridal package starting at ₹15,000.',
  keywords: ['bridal makeup Nellore', 'HD makeup Nellore', 'airbrush makeup Nellore', 'party makeup Nellore', 'engagement makeup Nellore', 'reception makeup Nellore', 'bridal makeup packages', 'makeup artist Nellore', 'bridal makeup near me', 'wedding makeup Nellore'],
  alternates: {
    canonical: 'https://holabeauty.in/makeup',
  },
  openGraph: {
    title: 'Makeup Services – Bridal, HD & Airbrush Makeup Nellore',
    description: 'Expert bridal, HD, airbrush, party & engagement makeup in Nellore. Packages from ₹15,000.',
    images: [{ url: '/images/makeupservice.png', width: 1200, height: 630, alt: 'Hola Beauty Makeup Services' }],
  },
}

const categories = [
  {
    name: 'Party Makeup',
    tiers: [
      { label: 'Normal', price: '₹4,999' },
      { label: 'HD', price: '₹5,999' },
      { label: 'Premium', price: '₹7,999' },
    ],
    gradient: 'linear-gradient(160deg, #2a1210, #150808)',
  },
  {
    name: 'Engagement Makeup',
    tiers: [
      { label: 'Normal', price: '₹6,499' },
      { label: 'HD', price: '₹7,999' },
      { label: 'Premium', price: '₹9,999' },
    ],
    gradient: 'linear-gradient(160deg, #2a0a15, #150508)',
  },
  {
    name: 'Bridal Makeup',
    tiers: [
      { label: 'Normal', price: '₹7,999' },
      { label: 'HD', price: '₹9,999' },
      { label: 'Premium', price: '₹14,999' },
    ],
    gradient: 'linear-gradient(160deg, #3a0d0d, #1a0505)',
    popular: true,
  },
  {
    name: 'Reception Makeup',
    tiers: [
      { label: 'Normal', price: '₹6,999' },
      { label: 'HD', price: '₹8,999' },
      { label: 'Premium', price: '₹10,999' },
    ],
    gradient: 'linear-gradient(160deg, #1a0a20, #0d0510)',
  },
  {
    name: 'Side Makeup',
    tiers: [
      { label: 'Normal', price: '₹3,999' },
      { label: 'HD', price: '₹4,999' },
      { label: 'Premium', price: '₹6,999' },
    ],
    gradient: 'linear-gradient(160deg, #2a0510, #150208)',
  },
  {
    name: 'Photo Shoot Makeup',
    tiers: [
      { label: 'Normal', price: '₹7,999' },
      { label: 'HD', price: '₹9,999' },
      { label: 'Premium', price: '₹12,999' },
    ],
    gradient: 'linear-gradient(160deg, #0d1a2a, #050d15)',
  },
]

export default async function MakeupPage() {
  const heroImage = null

  return (
    <>
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0000]"/>
        <Image
          src={heroImage || '/images/makeupservice.png'}
          alt="Hola Beauty Makeup Services – Bridal, HD & Party Makeup Nellore"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 60% 60% at 50% 50%, #8b1a1a18 0%, transparent 70%)'}}/>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-white/30 text-xs tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#c9a84c]">Makeup</span>
          </div>
          <h1 className="hero-h1 font-black mb-3 gold-shimmer" style={{fontFamily:'Playfair Display, serif'}}>
            Makeup Services
          </h1>
          <p className="text-white/40 italic" style={{fontFamily:'Great Vibes, cursive', fontSize:'28px'}}>Flawless Beauty, Timeless Elegance</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="#c9a84c" style={{filter:'drop-shadow(0 0 4px #c9a84c80)'}}>
              <path d="M8 1L9.5 5.5H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5H6.5L8 1Z"/>
            </svg>
            <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
          </div>
        </div>
      </section>
      <section style={{background:'#090202', padding:'48px 24px 64px'}} className="sm:py-16 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionTitle sub="Our Pricing" title="Makeup Menu" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:mt-10" style={{gap:'20px', marginTop:'32px'}}>
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 80}>
                <PricingCard {...cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
      <Footer />
    </>
  )
}

function PricingCard({ name, tiers, gradient, popular }) {
  return (
    <div style={{
      position:'relative',
      borderRadius:'2px',
      overflow:'hidden',
      border: popular ? '1.5px solid #c9a84c' : '1px solid #c9a84c25',
    }}>
      {popular && (
        <div style={{
          position:'absolute', top:0, left:0, right:0, zIndex:10,
          background:'#c9a84c', color:'#0a0000',
          textAlign:'center', padding:'4px 0',
          fontSize:'9px', letterSpacing:'0.25em', fontWeight:700,
          textTransform:'uppercase',
        }}>
          MOST POPULAR
        </div>
      )}
      <div style={{
        background: gradient,
        padding: popular ? '28px 20px 20px' : '24px 20px 20px',
        textAlign:'center',
      }}>
        <h3 style={{
          fontFamily:'Playfair Display, serif',
          fontSize:'16px', fontWeight:700,
          color:'#c9a84c',
          textTransform:'uppercase',
          letterSpacing:'0.08em',
        }}>{name}</h3>
        <div style={{
          width:'30px', height:'1px',
          background:'#c9a84c60',
          margin:'10px auto 0',
        }} />
      </div>
      <div style={{
        background:'linear-gradient(175deg, #1c0a08, #0f0404)',
      }}>
        {tiers.map((tier, i) => (
          <div
            key={tier.label}
            style={{
              display:'flex', justifyContent:'space-between',
              alignItems:'center',
              padding:'12px 20px',
              borderBottom: i < tiers.length - 1 ? '1px solid #c9a84c10' : 'none',
            }}
          >
            <span style={{
              fontFamily:'Cormorant Garamond, serif',
              fontSize:'14px', color:'rgba(255,255,255,0.6)',
              letterSpacing:'0.1em',
            }}>{tier.label}</span>
            <span style={{
              fontFamily:'Playfair Display, serif',
              fontSize:'15px', fontWeight:600,
              color:'#f0d070',
            }}>
              <span style={{textDecoration:'line-through', color:'rgba(255,255,255,0.3)', fontWeight:400, marginRight:'6px', fontSize:'13px'}}>{boostPrice(tier.price)}</span>
              {tier.price}
            </span>
          </div>
        ))}
      </div>
      <a
        href={`https://wa.me/919490939727?text=${encodeURIComponent('Hi! I would like to book an appointment for ' + name + ' at Hola Beauty Parlour.')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display:'block', textAlign:'center',
          background:'#25d366', color:'#fff',
          padding:'10px 0', borderRadius:'2px',
          fontSize:'11px', fontWeight:700, letterSpacing:'0.1em',
          textTransform:'uppercase', textDecoration:'none',
          margin:'12px 16px 16px',
          transition:'all 0.3s',
        }}
      >
        Book Now
      </a>
    </div>
  )
}
