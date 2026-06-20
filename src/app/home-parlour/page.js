import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { SectionTitle, ServiceItem, BookingCTA } from '@/components/SharedPage'

export const metadata = {
  title: 'Home Parlour Services – Beauty at Your Doorstep Nellore',
  description: 'Ladies home parlour services in Nellore. Bridal home package, pre-bridal, party makeup, facial, waxing, hair care, manicure & pedicure at your doorstep. Call +91 94909 39727.',
  keywords: ['home parlour services Nellore', 'beauty services at home Nellore', 'home salon Nellore', 'bridal makeup at home Nellore', 'party makeup at home', 'home facial Nellore', 'home waxing Nellore', 'salon at doorstep Nellore', 'ladies parlour at home'],
  alternates: {
    canonical: 'https://holabeauty.in/home-parlour',
  },
  openGraph: {
    title: 'Home Parlour Services – Hola Beauty Nellore',
    description: 'Luxury beauty services at your doorstep. Bridal, facial, waxing, hair & more. Call us!',
    images: [{ url: '/images/homeparloue.jpeg', width: 1200, height: 630, alt: 'Hola Beauty Home Parlour Services' }],
  },
}

const homeServices = [
  { name: 'Bridal Home Package', desc: 'Full bridal makeup, hair, saree draping & pre-bridal services at your home.', price: '₹8,000 – ₹25,000', popular: true, bg: 'linear-gradient(160deg, #2a0510, #150208)' },
  { name: 'Pre-Bridal Package', desc: 'Facials, body polishing, waxing & threading package done at home before the big day.', price: '₹3,000 – ₹8,000', popular: true, bg: 'linear-gradient(160deg, #1a101a, #0d080d)' },
  { name: 'Party/Function Makeup', desc: 'Glamorous makeup for family functions, pujas, and celebrations at your doorstep.', price: '₹2,000 – ₹5,000', bg: 'linear-gradient(160deg, #2a1210, #150808)' },
  { name: 'Home Facial', desc: 'Relaxing, rejuvenating facial treatment done in the comfort of your home.', price: '₹800 – ₹2,500', bg: 'linear-gradient(160deg, #0a1a10, #050d08)' },
  { name: 'Home Waxing', desc: 'Professional full-body or partial waxing at your home with hygienic standards.', price: '₹500 – ₹2,000', bg: 'linear-gradient(160deg, #1a1510, #0d0a08)' },
  { name: 'Home Hair Care', desc: 'Hair wash, spa, conditioning, and styling done at your convenience.', price: '₹600 – ₹3,000', bg: 'linear-gradient(160deg, #0a151a, #050a0d)' },
  { name: 'Home Manicure & Pedicure', desc: 'Relaxing nail care and foot massage in the comfort of your own space.', price: '₹600 – ₹1,500', bg: 'linear-gradient(160deg, #1a0515, #0d020a)' },
  { name: 'Senior Citizen Package', desc: 'Gentle beauty services designed for elderly ladies at home.', price: '₹500 – ₹1,500', bg: 'linear-gradient(160deg, #15101a, #0a080d)' },
]

const howItWorks = [
  { step: '01', title: 'WhatsApp Us', desc: 'Send us a message with your requirement and preferred date/time.' },
  { step: '02', title: 'Confirm Booking', desc: 'We confirm availability and share the final quote.' },
  { step: '03', title: 'We Arrive', desc: 'Our professional artist arrives at your doorstep on time.' },
  { step: '04', title: 'Look Stunning!', desc: 'Sit back and enjoy a premium salon experience at home.' },
]

export default async function HomeParlourPage() {
  const heroImage = null

  return (
    <>
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0000]"/>
        <Image
          src={heroImage || '/images/homeparlour.png'}
          alt="Home Parlour Services – Hola Beauty at Your Doorstep Nellore"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 60% 60% at 50% 50%, #8b1a1a18 0%, transparent 70%)'}}/>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-white/30 text-xs tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#c9a84c]">Home Parlour</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-3 gold-shimmer" style={{fontFamily:'Playfair Display, serif'}}>
            Home Parlour Services
          </h1>
          <p className="text-white/40 italic" style={{fontFamily:'Great Vibes, cursive', fontSize:'28px'}}>Luxury at Your Doorstep</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="#c9a84c" style={{filter:'drop-shadow(0 0 4px #c9a84c80)'}}>
              <path d="M8 1L9.5 5.5H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5H6.5L8 1Z"/>
            </svg>
            <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
          </div>
        </div>
      </section>

      <section style={{background:'#090202', padding:'64px 24px'}} className="sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle sub="At Your Doorstep" title="Home Parlour Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{gap:'20px', marginTop:'40px'}}>
            {homeServices.map((svc, i) => (
              <Reveal key={svc.name} delay={i * 80}>
                <ServiceItem {...svc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'#0a0000', padding:'64px 24px'}} className="sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle sub="Simple Process" title="How It Works" />
          <div className="grid grid-cols-2 md:grid-cols-4" style={{gap:'24px', marginTop:'40px'}}>
            {howItWorks.map((step, i) => (
              <div key={step.step} className="text-center relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] right-0 h-px"
                    style={{background:'linear-gradient(to right, #c9a84c60, transparent)'}}/>
                )}
                <div style={{
                  width:'48px', height:'48px', borderRadius:'50%',
                  border:'2px solid #c9a84c',
                  background:'#1a0808',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  margin:'0 auto 16px',
                  position:'relative', zIndex:10,
                  boxShadow:'0 0 15px #c9a84c40',
                }}>
                  <span style={{color:'#c9a84c', fontWeight:700, fontSize:'14px', fontFamily:'Playfair Display, serif'}}>
                    {step.step}
                  </span>
                </div>
                <h3 style={{color:'#c9a84c', fontWeight:600, fontSize:'14px', marginBottom:'8px', fontFamily:'Playfair Display, serif'}}>
                  {step.title}
                </h3>
                <p style={{color:'rgba(255,255,255,0.4)', fontSize:'12px', lineHeight:1.6}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </>
  )
}
