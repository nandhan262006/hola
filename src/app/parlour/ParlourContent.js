'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { SectionTitle, BookingCTA } from '@/components/SharedPage'

const categories = [
  {
    id:'threading', title:'Threading',
    gradient:'linear-gradient(160deg, #15101a, #0a080d)',
    services:[
      {name:'Eye Brows',price:'₹50',originalPrice:'₹60'},{name:'Fore Head',price:'₹30',originalPrice:'₹36'},
      {name:'Upper Lip',price:'₹30',originalPrice:'₹36'},{name:'Chin',price:'₹30',originalPrice:'₹36'},
      {name:'Full Face',price:'₹200',originalPrice:'₹240'},
    ],
  },
  {
    id:'dtan', title:'D-Tan',
    gradient:'linear-gradient(160deg, #1a1510, #0d0a08)',
    services:[
      {name:'Face',price:'₹300',originalPrice:'₹360'},{name:'Face & Neck',price:'₹500',originalPrice:'₹600'},
      {name:'Blouse Line',price:'₹300',originalPrice:'₹360'},{name:'Full Arms',price:'₹500',originalPrice:'₹600'},
      {name:'Half Legs',price:'₹500',originalPrice:'₹600'},{name:'Full Body',price:'₹3,000',originalPrice:'₹3,600'},
    ],
  },
  {
    id:'bleach', title:'Bleach',
    gradient:'linear-gradient(160deg, #1a1515, #0d0a0a)',
    services:[
      {name:'Face',price:'₹300',originalPrice:'₹360'},{name:'Face & Neck',price:'₹500',originalPrice:'₹600'},
      {name:'Blouse Line',price:'₹500',originalPrice:'₹600'},{name:'Full Arms',price:'₹500',originalPrice:'₹600'},
      {name:'Half Legs',price:'₹500',originalPrice:'₹600'},{name:'Full Body',price:'₹500',originalPrice:'₹600'},
    ],
  },
  {
    id:'waxing', title:'Flavored Waxing',
    gradient:'linear-gradient(160deg, #1a1510, #0d0a08)',
    services:[
      {name:'Upper Lip',price:'₹30',originalPrice:'₹36'},{name:'Chin',price:'₹30',originalPrice:'₹36'},
      {name:'Full Face',price:'₹200',originalPrice:'₹240'},{name:'Under Arms',price:'₹150',originalPrice:'₹180'},
      {name:'Half Arms',price:'₹400',originalPrice:'₹480'},{name:'Full Arms',price:'₹800',originalPrice:'₹960'},
      {name:'Half Legs',price:'₹500',originalPrice:'₹600'},{name:'Full Legs',price:'₹1,000',originalPrice:'₹1,200'},
      {name:'Full Body',price:'₹3,000',originalPrice:'₹3,600'},
    ],
  },
  {
    id:'hairspa', title:'Hair Spa',
    gradient:'linear-gradient(160deg, #0a1a15, #050d0a)',
    services:[
      {name:'Short',price:'₹1,200',originalPrice:'₹1,440'},{name:'Medium',price:'₹1,700',originalPrice:'₹2,040'},
      {name:'Long',price:'₹2,200',originalPrice:'₹2,640'},
    ],
  },
  {
    id:'haircolouring', title:'Hair Coloring',
    gradient:'linear-gradient(160deg, #2a0a20, #150510)',
    services:[
      {name:'Root Touchup',price:'₹999',originalPrice:'₹1,199'},{name:'Global',price:'₹1,999',originalPrice:'₹2,399'},
      {name:'Highlights Per Streak',price:'₹299',originalPrice:'₹359'},{name:'Highlights Global',price:'₹2,999',originalPrice:'₹3,599'},
    ],
  },
  {
    id:'hairstyling', title:'Hair Styling',
    gradient:'linear-gradient(160deg, #2a1510, #150a08)',
    services:[
      {name:'Hair Wash',price:'₹200',originalPrice:'₹240'},{name:'Hair Wash + Conditioner',price:'₹300',originalPrice:'₹360'},
      {name:'Blowdry',price:'₹499',originalPrice:'₹599'},{name:'Ironing',price:'₹799',originalPrice:'₹959'},
      {name:'Dandruff Control Treatment',price:'₹2,999',originalPrice:'₹3,599'},{name:'Keratine Treatment',price:'₹3,999',originalPrice:'₹4,799'},
      {name:'Hair Smoothening',price:'₹4,999',originalPrice:'₹5,999'},{name:'Hair Straightening',price:'₹4,999',originalPrice:'₹5,999'},
    ],
  },
  {
    id:'bodyspa', title:'Regular Body Spa',
    gradient:'linear-gradient(160deg, #10101a, #08080d)',
    services:[
      {name:'Face Massage',price:'₹350',originalPrice:'₹420'},{name:'Back Rejuvenation',price:'₹699',originalPrice:'₹839'},
      {name:'Foot Reflexology',price:'₹349',originalPrice:'₹419'},{name:'Scalp Massage',price:'₹500',originalPrice:'₹600'},
      {name:'Body Spa',price:'₹1,500',originalPrice:'₹1,800'},{name:'Body Polish',price:'₹3,500',originalPrice:'₹4,200'},
    ],
  },
  {
    id:'haircuts', title:'Hair Cuts',
    gradient:'linear-gradient(160deg, #2a1510, #150a08)',
    services:[
      {name:'Straight Cut',price:'₹400',originalPrice:'₹480'},{name:'U/V Cut',price:'₹600',originalPrice:'₹720'},
      {name:'Layer Cut',price:'₹750',originalPrice:'₹900'},{name:'Feather Cut',price:'₹1,000',originalPrice:'₹1,200'},
    ],
  },
  {
    id:'facials', title:'Facials',
    gradient:'linear-gradient(160deg, #1a0a15, #0d050a)',
    services:[
      {name:'Clean Up',price:'₹599',originalPrice:'₹719'},{name:'Fruit Facial',price:'₹999',originalPrice:'₹1,199'},
      {name:'Herbal Facial',price:'₹1,299',originalPrice:'₹1,559'},{name:'Insta Glow',price:'₹1,500',originalPrice:'₹1,800'},
      {name:'Skin Tightening',price:'₹1,700',originalPrice:'₹2,040'},{name:'Pearl Facial',price:'₹1,800',originalPrice:'₹2,160'},
      {name:'Acne Facial',price:'₹1,900',originalPrice:'₹2,280'},{name:'Gold Facial',price:'₹2,000',originalPrice:'₹2,400'},
      {name:'Diamond Facial',price:'₹2,200',originalPrice:'₹2,640'},{name:'Radiance Facial',price:'₹2,500',originalPrice:'₹3,000'},
      {name:'Skin Lighting',price:'₹3,000',originalPrice:'₹3,600'},{name:'Brightening',price:'₹3,500',originalPrice:'₹4,200'},
      {name:'Dead Sea Minerals',price:'₹3,800',originalPrice:'₹4,560'},{name:'O3+ Whitening Facial',price:'₹4,000',originalPrice:'₹4,800'},
      {name:'Gold Moroccan',price:'₹4,500',originalPrice:'₹5,400'},{name:'Bridal Special Facial',price:'₹5,000',originalPrice:'₹6,000'},
    ],
  },
  {
    id:'manicure', title:'Manicure',
    gradient:'linear-gradient(160deg, #1a0510, #0d0208)',
    services:[
      {name:'Premium',price:'₹700',originalPrice:'₹840'},{name:'Dead Sea',price:'₹900',originalPrice:'₹1,080'},
      {name:'Elite Strawberry',price:'₹1,100',originalPrice:'₹1,320'},{name:'Ice Cream',price:'₹1,400',originalPrice:'₹1,680'},
      {name:'Cupcake',price:'₹1,400',originalPrice:'₹1,680'},
    ],
  },
  {
    id:'pedicure', title:'Pedicure',
    gradient:'linear-gradient(160deg, #0a0a1a, #05050d)',
    services:[
      {name:'Premium',price:'₹800',originalPrice:'₹960'},{name:'Dead Sea',price:'₹1,000',originalPrice:'₹1,200'},
      {name:'Elite Strawberry',price:'₹1,200',originalPrice:'₹1,440'},{name:'Ice Cream',price:'₹1,500',originalPrice:'₹1,800'},
      {name:'Cup Cake',price:'₹1,500',originalPrice:'₹1,800'},
    ],
  },
]

export default function ParlourContent() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <>
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0000]"/>
        <Image
          src="/images/parlourservice.png"
          alt="Parlour Services at Hola Beauty – Hair, Facial, Waxing & Spa"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 60% 60% at 50% 50%, #8b1a1a18 0%, transparent 70%)'}}/>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-white/30 text-xs tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#c9a84c]">Parlour Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-3 gold-shimmer" style={{fontFamily:'Playfair Display, serif'}}>
            Parlour Services
          </h1>
          <p className="text-white/40 italic" style={{fontFamily:'Great Vibes, cursive', fontSize:'28px'}}>Head to Toe Beauty Care</p>
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
          <SectionTitle sub="Complete Care" title="Our Parlour Services" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5" style={{gap:'16px', marginTop:'40px'}}>
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80}>
                <CategoryCard cat={cat} onClick={() => setActiveCategory(cat)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
      <Footer />

      {activeCategory && (
        <CategoryModal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}
    </>
  )
}

function CategoryCard({ cat, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius:'2px', overflow:'hidden', cursor:'pointer',
        display:'flex', flexDirection:'column',
        border:'1px solid #c9a84c20',
        background: cat.gradient,
        transition:'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = '#c9a84c'
        e.currentTarget.style.boxShadow = '0 0 24px #c9a84c25, 0 8px 30px #00000080'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = '#c9a84c20'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{height:'12px', background: cat.gradient}}/>
      <div style={{
        textAlign:'center', padding:'12px 12px 16px',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      }} className="sm:p-4">
        <h3 style={{
          fontFamily:'Playfair Display, serif',
          fontWeight:700, color:'#c9a84c',
          fontSize:'clamp(13px,2vw,16px)',
          marginBottom:'6px',
        }}>{cat.title}</h3>
        <button style={{
          background:'transparent', border:'none',
          color:'#c9a84c', cursor:'pointer',
          fontFamily:'Cormorant Garamond, serif',
          fontSize:'12px', display:'flex', alignItems:'center', gap:'4px',
          transition:'color 0.3s',
        }}
          onMouseEnter={e => e.currentTarget.style.color = '#f0d070'}
          onMouseLeave={e => e.currentTarget.style.color = '#c9a84c'}
        >
          Click Me
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function CategoryModal({ category, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset:0, zIndex:9999,
        display:'flex', alignItems:'center', justifyContent:'center',
        background:'rgba(0,0,0,0.8)', backdropFilter:'blur(4px)',
        padding:'20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width:'100%', maxWidth:'480px',
          maxHeight:'90vh',
          border:'1px solid #c9a84c40',
          background:'linear-gradient(175deg, #1c0a08, #0f0404)',
          boxShadow:'0 0 60px #c9a84c15',
          borderRadius:'2px',
          display:'flex', flexDirection:'column',
        }}
      >
        <div style={{
          background: category.gradient,
          padding:'20px 20px 16px',
          borderBottom:'1px solid #c9a84c20',
          position:'relative',
          textAlign:'center',
        }}>
          <button
            onClick={onClose}
            style={{
              position:'absolute', top:'12px', right:'16px',
              background:'transparent', border:'none',
              color:'rgba(255,255,255,0.5)', cursor:'pointer',
              fontSize:'18px', lineHeight:1,
            }}
          >✕</button>
          <h3 style={{
            fontFamily:'Playfair Display, serif',
            fontSize:'clamp(18px,3vw,22px)', fontWeight:700,
            color:'#c9a84c',
          }}>{category.title}</h3>
          <div style={{
            width:'30px', height:'1px',
            background:'#c9a84c60', margin:'8px auto 0',
          }}/>
        </div>
        <div style={{
          overflowY:'auto',
          maxHeight:'calc(90vh - 100px)',
        }}>
          {category.services.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                display:'flex', justifyContent:'space-between', alignItems:'center',
                padding:'10px 20px',
                borderBottom: i < category.services.length - 1 ? '1px solid #c9a84c08' : 'none',
                transition:'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <div style={{
                  width:'4px', height:'4px', borderRadius:'50%',
                  background:'#c9a84c', flexShrink:0,
                }}/>
                <span style={{
                  fontFamily:'Cormorant Garamond, serif',
                  fontSize:'15px', color:'rgba(255,255,255,0.75)',
                }}>{svc.name}</span>
              </div>
              <span style={{
                fontFamily:'Playfair Display, serif',
                fontSize:'15px', fontWeight:600,
                color:'#f0d070', whiteSpace:'nowrap', marginLeft:'12px',
              }}>
                {svc.originalPrice ? (
                  <>
                    <span style={{textDecoration:'line-through', color:'rgba(255,255,255,0.3)', fontWeight:400, marginRight:'6px', fontSize:'13px'}}>{svc.originalPrice}</span>
                    {svc.price}
                  </>
                ) : svc.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
