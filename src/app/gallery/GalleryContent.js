'use client'
import { useState } from 'react'
import { PageHero } from '@/components/SharedPage'
import Footer from '@/components/Footer'

const galleryItems = [
  { type: 'image', src: '/images/portfolio.png', label: 'Portfolio Showcase' },
  { type: 'image', src: '/images/portfolio1.png', label: 'Bridal Look' },
  { type: 'image', src: '/images/portfolio2.png', label: 'Party Look' },
  { type: 'image', src: '/images/portfolio3.png', label: 'Bridal Glow' },
  { type: 'image', src: '/images/portfolio4.png', label: 'Styling' },
  { type: 'image', src: '/images/portfolio5.png', label: 'Transformation' },
  { type: 'image', src: '/images/portfolio6.png', label: 'Beauty' },
  { type: 'image', src: '/images/hairdressing.jpeg', label: 'Hairdressing' },
  { type: 'image', src: '/images/hairdressing1.jpeg', label: 'Hair Styling' },
  { type: 'image', src: '/images/hairdressing2.jpeg', label: 'Hair Color' },
  { type: 'image', src: '/images/hairdressing3.jpeg', label: 'Hair Spa' },
  { type: 'image', src: '/images/hairdressing4.jpeg', label: 'Hair Cut' },
  { type: 'image', src: '/images/hairdressing5.jpeg', label: 'Hair Makeover' },
]

export default function GalleryContent() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageHero title="Our Gallery" tagline="Moments of Beauty, Captured" breadcrumb="Gallery" icon="📸" />

      <section style={{background:'#090202', padding:'32px 16px 48px', minHeight:'100vh'}} className="sm:py-12 sm:px-6">
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(4,1fr)',
          gap:'12px',
          maxWidth:'980px', margin:'0 auto',
        }} className="sm:gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox({ item, index: i })}
              style={{
                position:'relative', borderRadius:'8px', overflow:'hidden',
                border:'1px solid rgba(201,168,76,0.1)',
                cursor:'pointer', aspectRatio:'3/4',
                background: item.type === 'placeholder' ? item.gradient : '#0f0303',
                opacity: 0,
                transform: 'translateY(30px)',
                animation: `fadeInUp 0.6s ease ${i * 80}ms forwards`,
              }}
              className="group"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.label + ' – Hola Beauty Parlour'}
                  style={{
                    width:'100%', height:'100%', objectFit:'cover',
                    transition:'transform 0.4s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              ) : (
                <div style={{
                  width:'100%', height:'100%',
                  display:'flex', flexDirection:'column',
                  alignItems:'center', justifyContent:'center',
                  position:'relative',
                  transition:'transform 0.4s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{
                    position:'absolute', inset:0,
                    background:'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08), transparent 70%)',
                  }}/>
                  <div style={{
                    position:'absolute', top:'12px', left:'12px', right:'12px', bottom:'12px',
                    border:'1px solid rgba(201,168,76,0.12)',
                    borderRadius:'4px',
                  }}/>
                  <span style={{fontSize:'32px', marginBottom:'8px', position:'relative', zIndex:1}}>{item.icon}</span>
                  <span style={{
                    fontFamily:'Cormorant Garamond, serif',
                    fontSize:'11px', color:'rgba(201,168,76,0.5)',
                    letterSpacing:'0.12em', textTransform:'uppercase',
                    position:'relative', zIndex:1,
                  }}>{item.label}</span>
                  <svg style={{
                    position:'absolute', bottom:'16px', right:'16px',
                    width:'16px', height:'16px', opacity:0.2,
                  }} viewBox="0 0 24 24" fill="#c9a84c">
                    <path d="M12 2C12 2 9 5 9 8C9 9.7 10 11 11 11.5C10 11 8.5 11.5 7.5 13C6.5 14.5 7 16.5 8.5 17.5C7 17 5.5 17.5 4.5 19C3.5 20.5 4 22 4 22C4 22 6 21 7.5 19.5C8.5 18.5 9 17 9 17C9 17 9.5 18.5 11 19.5C12.5 20.5 14.5 20 15 18.5C15.5 20 17 21 18.5 21C20 21 21 20 21 20C21 20 20 18 18.5 17C17.5 16.5 16 16.5 16 16.5C17.5 15.5 18 13.5 17 12C16.5 11 15 10.5 14 11C15 10.5 16 9 15.5 7.5C15 6 13.5 5 12 5.5C12 5.5 12.5 3.5 12 2Z"/>
                  </svg>
                </div>
              )}
              <div
                style={{
                  position:'absolute', inset:0,
                  background:'rgba(0,0,0,0)',
                  transition:'background 0.3s ease',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}
                className="group-hover:bg-black/20"
              >
                <div
                  style={{
                    width:'40px', height:'40px', borderRadius:'50%',
                    background:'rgba(201,168,76,0.8)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    opacity:0, transition:'opacity 0.3s ease',
                  }}
                  className="group-hover:opacity-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          style={{
            position:'fixed', inset:0, zIndex:50,
            display:'flex', alignItems:'center', justifyContent:'center',
            background:'rgba(0,0,0,0.95)', padding:'16px',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position:'absolute', top:'16px', right:'16px',
              color:'rgba(255,255,255,0.6)', background:'none', border:'none',
              fontSize:'24px', cursor:'pointer', zIndex:10, lineHeight:1,
              transition:'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >✕</button>
          <div
            onClick={e => e.stopPropagation()}
            style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}
          >
            {lightbox.item.type === 'image' ? (
              <img
                src={lightbox.item.src}
                alt={lightbox.item.label + ' – Hola Beauty Parlour'}
                style={{maxWidth:'100%', maxHeight:'90vh', objectFit:'contain', borderRadius:'8px'}}
              />
            ) : (
              <div style={{
                width:'320px', height:'420px', borderRadius:'12px',
                background: lightbox.item.gradient,
                display:'flex', flexDirection:'column',
                alignItems:'center', justifyContent:'center',
                position:'relative',
                border:'1px solid rgba(201,168,76,0.3)',
                boxShadow:'0 0 60px rgba(201,168,76,0.15)',
              }}>
                <div style={{
                  position:'absolute', inset:0,
                  background:'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.1), transparent 70%)',
                  borderRadius:'12px',
                }}/>
                <div style={{
                  position:'absolute', top:'20px', left:'20px', right:'20px', bottom:'20px',
                  border:'1px solid rgba(201,168,76,0.15)',
                  borderRadius:'8px',
                }}/>
                <span style={{fontSize:'64px', marginBottom:'16px', position:'relative', zIndex:1}}>{lightbox.item.icon}</span>
                <span style={{
                  fontFamily:'Playfair Display, serif',
                  fontSize:'18px', color:'#c9a84c', fontWeight:600,
                  position:'relative', zIndex:1,
                }}>{lightbox.item.label}</span>
                <span style={{
                  fontFamily:'Cormorant Garamond, serif',
                  fontSize:'11px', color:'rgba(255,255,255,0.3)',
                  letterSpacing:'0.15em', textTransform:'uppercase',
                  marginTop:'8px', position:'relative', zIndex:1,
                }}>Hola Beauty</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
