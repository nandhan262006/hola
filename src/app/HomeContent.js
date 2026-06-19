'use client'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'

export default function HomeContent() {
  const [slideUp, setSlideUp] = useState(false)
  const [hidden, setHidden] = useState(false)
  const videoRef = useRef(null)
  const hasEnded = useRef(false)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    hasEnded.current = false

    const done = () => {
      if (hasEnded.current) return
      hasEnded.current = true
      setSlideUp(true)
      setTimeout(() => setHidden(true), 800)
    }

    const fallback = setTimeout(done, 6000)
    vid.addEventListener('ended', done)
    vid.play().catch(done)

    return () => {
      vid.removeEventListener('ended', done)
      clearTimeout(fallback)
      vid.pause()
    }
  }, [])

  return (
    <>
      <div style={{
        position:'fixed', top:0, left:0, right:0, bottom:0, zIndex:9999, overflow:'hidden',
        background:'#000',
        pointerEvents: hidden ? 'none' : 'auto',
        visibility: hidden ? 'hidden' : 'visible',
        transition:'visibility 0s 0.8s',
      }}>
        <div style={{
          width:'100%', height:'100%',
          transform: slideUp ? 'translateY(-100%)' : 'translateY(0)',
          transition:'transform 0.8s cubic-bezier(0.77,0,0.18,1)',
        }}>
          <video
            ref={videoRef}
            muted
            playsInline
            disablePictureInPicture
            className="intro-video"
            style={{width:'100%', height:'100%', objectFit:'cover'}}
            onClick={() => {
              setSlideUp(true)
              setTimeout(() => setHidden(true), 800)
            }}
          >
            <source src="/images/laptopopentitles.mp4" media="(min-width: 768px)" />
            <source src="/images/opentitles.mp4" />
          </video>
        </div>
      </div>

      {/* ════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════ */}
      <section style={{
        position:'relative', minHeight:'100vh', overflow:'hidden',
        background:'#080100', paddingTop:'72px',
        display:'flex', alignItems:'center',
      }}>

        {/* Deep background gradient */}
        <div style={{position:'absolute',inset:0,
          background:'radial-gradient(ellipse 70% 90% at 65% 50%, #5a0a0a22 0%, transparent 70%)',
          pointerEvents:'none'}}/>

        {/* Red arc/circle glow behind bride - right side */}
        <div className="hero-glow" style={{
          position:'absolute', right:'5%', top:'10%',
          width:'520px', height:'520px', borderRadius:'50%',
          background:'transparent',
          border:'1.5px solid #8b1a1a60',
          boxShadow:'inset 0 0 80px #8b1a1a30, 0 0 80px #8b1a1a20',
          pointerEvents:'none'
        }}/>
        <div className="hero-glow" style={{
          position:'absolute', right:'8%', top:'14%',
          width:'440px', height:'440px', borderRadius:'50%',
          background:'radial-gradient(ellipse at center, #8b1a1a18 0%, transparent 70%)',
          pointerEvents:'none'
        }}/>

        {/* Rose petals */}
        {[
          {left:'12%',delay:'0s',dur:'7s',color:'#8b1a1a'},
          {left:'22%',delay:'2s',dur:'9s',color:'#a01818'},
          {left:'55%',delay:'1s',dur:'8s',color:'#6b1010'},
          {left:'70%',delay:'3s',dur:'10s',color:'#8b1a1a'},
          {left:'82%',delay:'0.5s',dur:'7.5s',color:'#a01818'},
        ].map((p,i)=>(
          <div key={i} className="petal" style={{
            position:'absolute', top:'-30px', left:p.left,
            width:'14px', height:'18px', borderRadius:'50% 10% 50% 10%',
            background:p.color, opacity:0.9,
            '--pdelay':p.delay, '--pdur':p.dur,
            pointerEvents:'none',
          }}/>
        ))}

        {/* Sparkle stars */}
        {[
          {top:'15%',left:'5%',delay:'0s',dur:'2.5s'},
          {top:'30%',left:'8%',delay:'1s',dur:'3s'},
          {top:'60%',left:'3%',delay:'0.5s',dur:'2s'},
          {top:'20%',left:'40%',delay:'1.5s',dur:'2.8s'},
          {top:'10%',left:'52%',delay:'0.8s',dur:'2.2s'},
          {top:'25%',left:'88%',delay:'1.2s',dur:'3.2s'},
          {top:'75%',left:'15%',delay:'0.3s',dur:'2.6s'},
        ].map((s,i)=>(
          <svg key={i} className="sparkle" style={{
            position:'absolute',top:s.top,left:s.left,
            '--delay':s.delay,'--dur':s.dur,
            width:'14px',height:'14px',pointerEvents:'none',
          }} viewBox="0 0 20 20">
            <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2Z" fill="#c9a84c" opacity="1"/>
          </svg>
        ))}

        {/* ── BRIDE IMAGE (right half, facing left toward text) ── */}
        <div className="hero-bride" style={{
          position:'absolute', right:0, top:0, bottom:0,
          width:'65%', zIndex:1,
        }}>
          {/* Left-side fade so bride blends into dark BG */}
          <div className="hero-bride-overlay" style={{
            position:'absolute', inset:0, zIndex:2,
            background:'linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.56) 18%, rgba(0,0,0,0.25) 35%, transparent 55%)',
          }}/>
          {/* Bottom fade */}
          <div className="hero-bride-fade" style={{
            position:'absolute', bottom:0, left:0, right:0,
            height:'180px', zIndex:2,
            background:'linear-gradient(to top, #080100, transparent)',
          }}/>
          <Image
            src="/images/bride-hero.png"
            alt="Bridal Makeup – Hola Beauty Parlour"
            fill
            priority
            style={{objectFit:'cover', objectPosition:'left top'}}
          />
        </div>

        {/* ── HERO TEXT (left side) ── */}
        <div className="hero-text-wrap" style={{
          position:'relative', zIndex:10,
          maxWidth:'980px', margin:'0 auto', padding:'0 40px',
          width:'100%',
        }}>
          <div style={{maxWidth:'520px'}}>

            {/* HOLA - huge gold metallic */}
            <h1 className="gold-shimmer" style={{
              fontFamily:'Playfair Display,serif',
              fontSize:'clamp(80px,12vw,148px)',
              fontWeight:900, lineHeight:0.9,
              letterSpacing:'-0.01em',
              marginBottom:'12px',
            }}>HOLA</h1>

            {/* Hair | Beauty | Makeup */}
            <div style={{
              display:'flex', alignItems:'center', gap:'12px',
              marginBottom:'16px',
            }}>
              {['Hair','Beauty','Makeup'].map((w,i)=>(
                <span key={w} style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <span style={{
                    fontFamily:'Cormorant Garamond,serif',
                    fontSize:'clamp(18px,2.5vw,26px)',
                    fontWeight:500, color:'#fff',
                    letterSpacing:'0.06em',
                  }}>{w}</span>
                  {i<2 && <span style={{color:'#c9a84c',fontSize:'22px',fontWeight:300}}>|</span>}
                </span>
              ))}
            </div>

            {/* Ornament divider */}
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px'}}>
              <div style={{width:'32px',height:'1px',background:'#c9a84c'}}/>
              {/* Floral ornament */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#c9a84c" style={{filter:'drop-shadow(0 0 5px #c9a84c80)'}}>
                <path d="M12 2C12 2 9 5 9 8C9 9.7 10 11 11 11.5C10 11 8.5 11.5 7.5 13C6.5 14.5 7 16.5 8.5 17.5C7 17 5.5 17.5 4.5 19C3.5 20.5 4 22 4 22C4 22 6 21 7.5 19.5C8.5 18.5 9 17 9 17C9 17 9.5 18.5 11 19.5C12.5 20.5 14.5 20 15 18.5C15.5 20 17 21 18.5 21C20 21 21 20 21 20C21 20 20 18 18.5 17C17.5 16.5 16 16.5 16 16.5C17.5 15.5 18 13.5 17 12C16.5 11 15 10.5 14 11C15 10.5 16 9 15.5 7.5C15 6 13.5 5 12 5.5C12 5.5 12.5 3.5 12 2Z"/>
              </svg>
              <div style={{flex:1,height:'1px',background:'linear-gradient(to right,#c9a84c,transparent)'}}/>
            </div>

            {/* Script tagline */}
            <p style={{
              fontFamily:'Great Vibes,cursive',
              fontSize:'clamp(24px,3.5vw,38px)',
              color:'#e8c86a',
              marginBottom:'36px',
              textShadow:'0 0 20px #c9a84c40',
            }}>Where Beauty Meets Perfection</p>

            {/* CTA Buttons */}
            <div className="hero-cta" style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
              <Link href="/booking" className="btn-crimson">
                {/* Calendar icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book Appointment
              </Link>
              <Link href="/#services" className="btn-crimson">
                {/* Lotus/play icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 8C8 8 10 10 12 10C14 10 16 8 16 8" strokeLinecap="round"/>
                  <path d="M6 14C6 14 8.5 16 12 16C15.5 16 18 14 18 14" strokeLinecap="round"/>
                </svg>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES SECTION
      ════════════════════════════════════ */}
      <section id="services" style={{
        background:'#090101', padding:'60px 24px 80px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>

          {/* Section heading */}
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <p style={{
              fontFamily:'Cormorant Garamond,serif',
              fontSize:'11px', letterSpacing:'0.45em',
              color:'#8b1a1a', textTransform:'uppercase', marginBottom:'8px',
            }}>Our Premium</p>

            {/* ── SERVICES with ornament dashes ── */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'16px',marginBottom:'12px'}}>
              {/* Left ornament */}
              <div style={{display:'flex',alignItems:'center',gap:'6px'}}>                <svg width="14" height="14" viewBox="0 0 14 14" fill="#c9a84c">
                  <circle cx="7" cy="7" r="3"/><circle cx="7" cy="1" r="1.5"/><circle cx="7" cy="13" r="1.5"/>
                  <circle cx="1" cy="7" r="1.5"/><circle cx="13" cy="7" r="1.5"/>
                </svg>
                <div style={{width:'20px',height:'1px',background:'#c9a84c60'}}/>
              </div>

              <h2 style={{
                fontFamily:'Playfair Display,serif',
                fontSize:'clamp(38px,7vw,62px)',
                fontWeight:900, color:'#fff',
                letterSpacing:'0.18em', textTransform:'uppercase',
              }}>SERVICES</h2>

              {/* Right ornament (mirror) */}
              <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <div style={{width:'20px',height:'1px',background:'#c9a84c60'}}/>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="#c9a84c">
                  <circle cx="7" cy="7" r="3"/><circle cx="7" cy="1" r="1.5"/><circle cx="7" cy="13" r="1.5"/>
                  <circle cx="1" cy="7" r="1.5"/><circle cx="13" cy="7" r="1.5"/>
                </svg>
                <div style={{width:'40px',height:'1px',background:'#c9a84c60'}}/>
              </div>
            </div>

            {/* Lotus ornament below */}
            <div style={{display:'flex',justifyContent:'center'}}>
              <svg width="64" height="32" viewBox="0 0 64 32" fill="#c9a84c" style={{filter:'drop-shadow(0 0 6px #c9a84c60)'}}>
                <path d="M32 30 C22 22, 8 24, 4 14 C8 9, 18 14, 24 18 C24 18, 19 9, 24 5 C28 1, 32 8, 32 8 C32 8, 36 1, 40 5 C45 9, 40 18, 40 18 C46 14, 56 9, 60 14 C56 24, 42 22, 32 30Z" opacity="0.85"/>
              </svg>
            </div>
          </div>

          {/* ── THREE SERVICE CARDS ── */}
          <div className="svc-grid" style={{display:'grid',gap:'24px'}}>
            <ServiceCard
              href="/makeup"
              imgSrc="/images/makeup.jpeg"
              title="Makeup Services"
              desc="Professional bridal, party, engagement, and fashion makeup with flawless finishing."
            />
            <ServiceCard
              href="/parlour"
              imgSrc="/images/parlour.jpeg"
              title="Parlour Services"
              desc="Hair styling, facials, skincare, spa, threading, manicure, pedicure, and beauty treatments."
            />
            <ServiceCard
              href="/home-parlour"
              imgSrc="/images/homeparloue.jpeg"
              title="Home Parlour Services"
              desc="Luxury beauty services at your doorstep for weddings, functions, and special occasions."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          ABOUT SECTION
      ════════════════════════════════════ */}
      <section id="about" style={{
        background:'#090202', padding:'60px 24px 80px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{gap:'40px', alignItems:'center'}}>

            {/* Owner Photo Holder */}
            <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{
                position:'relative', width:'340px', height:'400px', borderRadius:'4px', overflow:'hidden',
                border:'2px solid rgba(201,168,76,0.4)',
              }} className="sm:w-[420px] sm:h-[500px]">
                <img
                  src="/images/hero.png"
                  alt="Lasya – Founder & Makeup Artist at Hola Beauty Parlour"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                />
                <div style={{
                  position:'absolute', top:'16px', right:'16px',
                  background:'#c41e3a', color:'#fff',
                  fontFamily:'Cormorant Garamond, serif', fontSize:'13px', fontWeight:700,
                  letterSpacing:'0.08em', padding:'6px 14px', borderRadius:'3px',
                  textShadow:'0 1px 3px rgba(0,0,0,0.5)',
                }}>
                  6+ YEARS OF EXP
                </div>
                <p style={{
                  position:'absolute', bottom:'16px', left:'16px',
                  color:'#fff', fontFamily:'Cormorant Garamond, serif', fontSize:'20px', fontWeight:700,
                  letterSpacing:'0.08em', textShadow:'0 2px 8px rgba(0,0,0,0.7)',
                }}>
                  Lasya
                </p>
              </div>
            </div>

            {/* Story */}
            <div>
              <p style={{
                color:'#c9a84c', fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:600, marginBottom:'8px',
              }}>
                Our Story
              </p>
              <h2 style={{
                fontFamily:'Playfair Display, serif', fontSize:'28px', fontWeight:900, color:'#fff', marginBottom:'6px',
              }} className="sm:text-3xl">
                Hello from <span className="gold-shimmer">Hola Beauty</span>
              </h2>
              <p style={{
                color:'#c9a84c', fontFamily:'Great Vibes, cursive', fontSize:'24px', marginBottom:'20px',
              }}>
                Lasya
              </p>
              <p style={{
                color:'rgba(201,168,76,0.5)', fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase',
                fontWeight:600, marginBottom:'14px', marginTop:'-10px',
              }}>
                Founder &amp; Makeup Artist
              </p>
              <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
                <p style={{color:'rgba(255,255,255,0.88)', fontFamily:'Cormorant Garamond, serif', fontSize:'18px', lineHeight:1.7}}>
                  At Hola Beauty Parlour, we believe every woman deserves to feel confident, beautiful, and radiant. Founded with a passion for transforming everyday looks into stunning works of art, our salon has become a trusted name in Nellore for bridal makeup, party glam, and professional parlour services.
                </p>
                <p style={{color:'rgba(255,255,255,0.88)', fontFamily:'Cormorant Garamond, serif', fontSize:'18px', lineHeight:1.7}}>
                  Our journey began with a simple vision to bring high-quality beauty services that celebrate the unique charm of every client. Whether it is a traditional bridal look, a modern party style, or a relaxing home parlour session, we pour our heart into every service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          STATS SECTION
      ════════════════════════════════════ */}
      <section style={{
        background:'#080100', padding:'60px 24px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{gap:'32px'}}>
            {[
              { value:'1000+', label:'Happy Brides' },
              { value:'6+', label:'Years Experience' },
              { value:'1500+', label:'Clients Served' },
              { value:'24/7', label:'Bridal Support' },
            ].map((stat,i)=>(
              <div key={i} className="stat-card" style={{
                textAlign:'center', padding:'24px 16px',
              }}>
                <CountUp value={stat.value} />
                <p style={{
                  fontFamily:'Cormorant Garamond,serif',
                  fontSize:'14px', letterSpacing:'0.1em',
                  color:'rgba(255,255,255,0.6)',
                  textTransform:'uppercase',
                }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          BRIDAL PACKAGES SECTION
      ════════════════════════════════════ */}
      <section style={{
        background:'#080100', padding:'60px 24px 80px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>

          {/* Section heading */}
          <div style={{textAlign:'center',marginBottom:'48px'}}>
            <p style={{
              fontFamily:'Cormorant Garamond,serif',
              fontSize:'11px', letterSpacing:'0.45em',
              color:'#8b1a1a', textTransform:'uppercase', marginBottom:'8px',
            }}>Bridal Packages</p>
            <h2 style={{
              fontFamily:'Playfair Display,serif',
              fontSize:'clamp(32px,6vw,52px)',
              fontWeight:900, color:'#fff',
              letterSpacing:'0.12em', textTransform:'uppercase',
            }}>CHOOSE YOUR GLOW</h2>
          </div>

          {/* Three cards */}
          <div className="bridal-grid" style={{display:'grid', gap:'24px'}}>
            {[
              {
                title:'Timeless Elegance',
                sub:'Basic Makeup',
                desc:'Embrace a simple, natural radiance with lightweight coverage. Perfect for brides who love a subtle, fresh, and effortlessly beautiful look.',
               
                img:'/images/bride-hero.png',
                price:'₹15,000',
              },
              {
                title:'Picture-Perfect Glow',
                sub:'HD Makeup',
                desc:'Achieve a smooth, high-definition finish that looks flawless both in person and in photographs, giving you a polished and radiant appearance throughout your celebration.',
                
                img:'/images/bride-hero.png',
                price:'₹25,000',
              },
              {
                title:'Airbrush Perfection',
                sub:'Airbrush Makeup',
                desc:'Experience advanced airbrush technology that delivers an ultra-lightweight, even, and radiant finish. Perfect for achieving a naturally flawless look that lasts throughout your special day.',
                
                img:'/images/bride-hero.png',
                price:'₹35,000',
              },
            ].map((pkg,i)=>(
              <div key={i} className="svc-card" style={{textAlign:'center'}}>
                <div style={{
                  position:'relative', height:'260px', overflow:'hidden',
                  background:'#0f0303',
                }}>
                  <Image
                    src={pkg.img}
                    alt={pkg.title + ' – Hola Beauty Bridal Package'}
                    fill
                    style={{objectFit:'cover', objectPosition:'center'}}
                  />
                  <div style={{
                    position:'absolute',inset:0,
                    background:'linear-gradient(to top,#0f0404,transparent 40%)',
                  }}/>
                  <div style={{
                    position:'absolute', bottom:'16px', left:'50%', transform:'translateX(-50%)',
                    fontFamily:'Playfair Display,serif', fontSize:'22px', fontWeight:900,
                    color:'#c9a84c', letterSpacing:'0.15em',
                    textShadow:'0 2px 8px rgba(0,0,0,0.7)',
                    whiteSpace:'nowrap',
                  }}>
                    {pkg.title}
                  </div>
                </div>
                <div style={{padding:'20px'}}>
                  <p style={{
                    fontFamily:'Cormorant Garamond,serif',
                    fontSize:'14px', letterSpacing:'0.2em',
                    color:'#c9a84c', textTransform:'uppercase',
                    marginBottom:'8px',
                  }}>
                    {pkg.sub}
                  </p>
                  <p style={{
                    color:'rgba(255,255,255,0.75)',
                    fontFamily:'Cormorant Garamond,serif',
                    fontSize:'16px', lineHeight:1.65,
                  }}>
                    Starting at {pkg.price}
                  </p>
                  <p style={{
                    color:'rgba(255,255,255,0.55)',
                    fontFamily:'Cormorant Garamond,serif',
                    fontSize:'15px', lineHeight:1.65,
                    marginTop:'10px',
                  }}>
                    {pkg.desc}
                  </p>
                  <p style={{
                    fontFamily:'Cormorant Garamond,serif',
                    fontSize:'12px', fontStyle:'italic',
                    color:'rgba(201,168,76,0.5)',
                    marginTop:'14px',
                    letterSpacing:'0.05em',
                  }}>
                    — {pkg.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PORTFOLIO SECTION
      ════════════════════════════════════ */}
      <section style={{
        background:'#090202', padding:'60px 24px 80px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <p style={{
              fontFamily:'Cormorant Garamond,serif',
              fontSize:'11px', letterSpacing:'0.45em',
              color:'#8b1a1a', textTransform:'uppercase', marginBottom:'8px',
            }}>Our Work</p>
            <h2 style={{
              fontFamily:'Playfair Display,serif',
              fontSize:'clamp(32px,6vw,52px)',
              fontWeight:900, color:'#fff',
              letterSpacing:'0.12em', textTransform:'uppercase',
            }}>PORTFOLIO</h2>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px',
          }}>
            {[
  { src:'/images/portfolio.png', span:'' },
  { src:'/images/portfolio1.png', span:'' },
  { src:'/images/portfolio2.png', span:'' },
  { src:'/images/portfolio3.png', span:'' },
  { src:'/images/portfolio4.png', span:'' },
  { src:'/images/portfolio5.png', span:'' },
  { src:'/images/portfolio6.png', span:'' },
].map((img,i)=>(
              <div key={i} style={{
                position:'relative', aspectRatio:'5/6', overflow:'hidden', borderRadius:'4px',
              }}>
                <Image
                  src={img.src}
                  alt={`Hola Beauty Portfolio ${i + 1} – Bridal & Beauty Work`}
                  fill
                  style={{objectFit:'cover', objectPosition: i >= 3 && i <= 5 ? 'center 25%' : 'center'}}
                />
              </div>
            ))}
            <Link href="/gallery" style={{
              gridColumn:'1 / -1', display:'flex', alignItems:'center', justifyContent:'center',
              width:'280px', margin:'0 auto', height:'40px', borderRadius:'4px',
              border:'1.5px solid #c9a84c', color:'#c9a84c',
              fontFamily:'Cormorant Garamond,serif', fontSize:'14px', fontWeight:700,
              letterSpacing:'0.12em', textDecoration:'none', textTransform:'uppercase',
              transition:'all .3s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.background='#c9a84c'; e.currentTarget.style.color='#080100'}}
            onMouseLeave={e=>{e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#c9a84c'}}
            >
              View My Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft:'8px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          HAIRDRESSING CAROUSEL
      ════════════════════════════════════ */}
      <section style={{
        background:'#080100', padding:'60px 24px', overflow:'hidden',
      }}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <p style={{
            fontFamily:'Cormorant Garamond,serif', fontSize:'11px',
            letterSpacing:'0.45em', color:'#8b1a1a', textTransform:'uppercase',
            textAlign:'center', marginBottom:'8px',
          }}>Our Expertise</p>
          <h2 style={{
            fontFamily:'Playfair Display,serif', fontSize:'clamp(28px,5vw,40px)',
            fontWeight:900, textAlign:'center', marginBottom:'40px',
            color:'#c9a84c', textShadow:'0 0 20px rgba(201,168,76,0.3)',
          }}>Best Hairdressing in Nellore</h2>
          <div style={{
            display:'flex', gap:'16px', overflow:'hidden',
            maskImage:'linear-gradient(to right,transparent,black 5%,black 95%,transparent)',
            WebkitMaskImage:'linear-gradient(to right,transparent,black 5%,black 95%,transparent)',
          }}>
            <div className="carousel-track" style={{
              display:'flex', gap:'16px', animation:'scrollLeft 30s linear infinite',
            }}>
              {[
                '/images/portfolio.png','/images/portfolio1.png',
                '/images/portfolio2.png','/images/portfolio3.png',
                '/images/portfolio4.png','/images/portfolio5.png',
                '/images/portfolio6.png','/images/hero.png',
                '/images/portfolio.png','/images/portfolio1.png',
                '/images/portfolio2.png','/images/portfolio3.png',
                '/images/portfolio4.png','/images/portfolio5.png',
                '/images/portfolio6.png','/images/hero.png',
              ].map((src,i)=>(
                <div key={i} style={{
                  flex:'0 0 220px', height:'280px', borderRadius:'8px',
                  overflow:'hidden', border:'1px solid rgba(201,168,76,0.15)',
                  position:'relative',
                }}>
                  <img
                    src={src}
                    alt={`Hair styling look ${i+1} – Hola Beauty Parlour`}
                    style={{width:'100%',height:'100%',objectFit:'cover'}}
                  />
                  <div style={{
                    position:'absolute', bottom:0, left:0, right:0,
                    background:'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding:'40px 12px 10px',
                  }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          MAP SECTION
      ════════════════════════════════════ */}
      <section style={{
        background:'#080100', padding:'60px 24px 80px',
      }}>
        <div style={{maxWidth:'980px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'40px'}}>
            <p style={{
              fontFamily:'Cormorant Garamond,serif',
              fontSize:'11px', letterSpacing:'0.45em',
              color:'#8b1a1a', textTransform:'uppercase', marginBottom:'8px',
            }}>Visit Us</p>
            <h2 style={{
              fontFamily:'Playfair Display,serif',
              fontSize:'clamp(32px,6vw,52px)',
              fontWeight:900, color:'#fff',
              letterSpacing:'0.12em', textTransform:'uppercase',
            }}>FIND US</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/sMyYbdMEwYXtrVmt5"
            target="_blank"
            rel="noopener noreferrer"
            style={{display:'block', position:'relative', borderRadius:'8px', overflow:'hidden', textDecoration:'none'}}
          >
            <iframe
              src="https://www.google.com/maps?q=Hola+Beauty+Parlour+Nellore&output=embed&z=15"
              width="100%"
              height="380"
              style={{border:0, borderRadius:'8px', filter:'invert(90%) hue-rotate(180deg)'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hola Beauty Parlour – Google Maps Location"
            />
            <div style={{
              position:'absolute', bottom:'12px', left:'50%', transform:'translateX(-50%)',
              background:'rgba(0,0,0,0.75)', color:'#c9a84c',
              fontSize:'12px', letterSpacing:'0.05em', padding:'6px 16px',
              borderRadius:'4px', whiteSpace:'nowrap',
              fontFamily:'Cormorant Garamond, serif',
            }}>
              Tap to open in Google Maps ↗
            </div>
          </a>
        </div>
      </section>

      <Footer/>
    </>
  )
}

function ServiceCard({ href, imgSrc, title, desc }) {
  return (
    <div className="svc-card">
      <div style={{
        position:'relative', height:'280px', overflow:'hidden',
        background:'#0f0303',
      }}>
        <Image
          src={imgSrc}
          alt={title + ' – Hola Beauty Parlour'}
          fill
          style={{objectFit:'cover', objectPosition:'center'}}
        />
        <div style={{
          position:'absolute',inset:0,
          background:'linear-gradient(to top,#0f0404,transparent 40%)',
        }}/>
      </div>

      <div style={{padding:'24px',textAlign:'center'}}>
        <h3 style={{
          fontFamily:'Playfair Display,serif',
          fontSize:'23px',fontWeight:700,
          color:'#c9a84c',marginBottom:'12px',
          background:'linear-gradient(135deg,#f0d070,#c9a84c,#f0d070)',
          backgroundSize:'200% auto',
          WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
          backgroundClip:'text',
        }}>{title}</h3>
        <p style={{
          color:'rgba(255,255,255,0.55)',
          fontFamily:'Cormorant Garamond,serif',
          fontSize:'17px',lineHeight:1.65,
          marginBottom:'20px',
        }}>{desc}</p>
        <Link href={href} className="btn-click">
          Click Here
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

function CountUp({ value }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)

  useEffect(() => {
    const num = parseInt(value, 10)
    if (isNaN(num)) { setDisplay(value); return }

    const suffix = value.replace(/[\d]/g, '')
    const duration = 2000
    const start = performance.now()

    const frame = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * num) + suffix)
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [value])

  return (
    <p ref={ref} style={{
      fontFamily:'Playfair Display,serif',
      fontSize:'clamp(32px,4vw,48px)', fontWeight:900,
      color:'#c9a84c', marginBottom:'4px',
      textShadow:'0 0 20px rgba(201,168,76,0.3)',
    }}>{display}</p>
  )
}
