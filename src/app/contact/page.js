import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/SharedPage'

export const metadata = {
  title: 'Contact Us – Hola Beauty Parlour Nellore',
  description: 'Visit Hola Beauty Parlour in Nellore near Mahila Pranganam Gate, Santhinagar. Call +91 94909 39727 or follow @hola_makeovers on Instagram. Ladies beauty parlour open daily 9AM-10PM.',
  keywords: ['contact Hola Beauty', 'Hola Beauty Parlour address', 'beauty parlour Nellore contact', 'Nellore beauty salon phone', 'hola_makeovers Instagram', 'beauty parlour near Mahila Pranganam'],
  openGraph: {
    title: 'Contact Us – Hola Beauty Parlour Nellore',
    description: 'Visit us or call +91 94909 39727. Ladies beauty parlour near Mahila Pranganam Gate, Nellore.',
    images: [{ url: '/images/bride-hero.png', width: 1200, height: 630, alt: 'Contact Hola Beauty Parlour Nellore' }],
  },
}

const whatsappNumber = '919490939727'
const msg = encodeURIComponent('Hi! I would like to get in touch with Hola Beauty Parlour.')

const contactDetails = [
  { icon: '📍', title: 'Address', value: 'Near Mahila Pranganam Gate, Santhinagar, Dycusaroad, Podalakur Rd, Andhra Kesari Nagar, Nellore-1 Rural, Andhra Pradesh 524004' },
  { icon: '📱', title: 'Phone / WhatsApp', value: '+91 94909 39727' },
  { icon: '📸', title: 'Instagram', value: '@hola_makeovers' },
  { icon: '✉️', title: 'Email', value: 'holanellore@gmail.com' },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
  { day: 'Public Holidays', time: 'By Appointment Only', closed: true },
]

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" tagline="We'd Love to Hear From You" breadcrumb="Contact" icon="📞" />

      <section style={{background:'#090202', padding:'48px 16px 64px'}} className="sm:py-16 sm:px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10" style={{gap:'32px'}}>
              {/* Left: Contact Info */}
              <div>
                <h2 style={{fontFamily:'Playfair Display, serif', fontSize:'24px', fontWeight:900, color:'#fff', marginBottom:'24px'}} className="sm:text-3xl">
                  Get In <span className="gold-shimmer">Touch</span>
                </h2>
                <p style={{color:'rgba(255,255,255,0.5)', fontFamily:'Cormorant Garamond, serif', fontSize:'16px', lineHeight:1.6, marginBottom:'32px'}}>
                  Reach out to us for appointments, queries, or any beauty needs. We're always happy to help you look and feel your best!
                </p>

                <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                  {contactDetails.map(d => (
                    <div key={d.title} style={{display:'flex', alignItems:'flex-start', gap:'16px'}}>
                      <div style={{
                        width:'40px', height:'40px', borderRadius:'50%',
                        border:'1px solid rgba(201,168,76,0.4)',
                        background:'#1a0808', flexShrink:0,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        boxShadow:'0 0 12px #c9a84c30',
                      }}>
                        <span style={{fontSize:'18px', filter:'drop-shadow(0 0 4px #c9a84c80)'}}>{d.icon}</span>
                      </div>
                      <div>
                        <p style={{color:'#c9a84c', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:600, marginBottom:'2px'}}>{d.title}</p>
                        <p style={{color:'rgba(255,255,255,0.6)', fontSize:'14px'}}>{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{marginTop:'40px', display:'flex', flexDirection:'column', gap:'16px'}}>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:'12px',
                      padding:'12px 24px', borderRadius:'2px',
                      fontWeight:700, fontSize:'14px', letterSpacing:'0.1em',
                      textTransform:'uppercase', color:'#fff',
                      background:'#25d366', textDecoration:'none', width:'fit-content',
                      boxShadow:'0 0 20px #25d36640',
                    }}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/hola_makeovers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:'12px',
                      padding:'12px 24px', borderRadius:'2px',
                      fontWeight:700, fontSize:'14px', letterSpacing:'0.1em',
                      textTransform:'uppercase', color:'#fff',
                      background:'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                      textDecoration:'none', width:'fit-content',
                      boxShadow:'0 0 20px #e1306c40',
                    }}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow on Instagram
                  </a>
                </div>
              </div>

              {/* Right: Map + Hours */}
              <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                <a
                  href="https://maps.app.goo.gl/sMyYbdMEwYXtrVmt5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    borderRadius:'8px', overflow:'hidden',
                    border:'1px solid rgba(201,168,76,0.2)',
                    display:'block', position:'relative', height:'220px',
                    textDecoration:'none',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps?q=Hola+Beauty+Parlour+Nellore&output=embed&z=15"
                    width="100%"
                    height="100%"
                    style={{border:0, borderRadius:'8px', filter:'invert(90%) hue-rotate(180deg)'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hola Beauty Parlour – Google Maps Location"
                  />
                  <div style={{
                    position:'absolute', bottom:'8px', left:'50%', transform:'translateX(-50%)',
                    background:'rgba(0,0,0,0.75)', color:'#c9a84c',
                    fontSize:'11px', letterSpacing:'0.05em', padding:'4px 12px',
                    borderRadius:'4px', whiteSpace:'nowrap',
                    fontFamily:'Cormorant Garamond, serif',
                  }}>
                    Tap to open in Google Maps ↗
                  </div>
                </a>

                <div style={{
                  borderRadius:'8px', padding:'24px',
                  background:'linear-gradient(175deg, #1c0a08, #0f0404)',
                  border:'1px solid #c9a84c30',
                }}>
                  <h3 style={{color:'#c9a84c', fontWeight:700, fontSize:'18px', marginBottom:'20px', fontFamily:'Playfair Display, serif'}}>Working Hours</h3>
                  <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                    {hours.map(h => (
                      <div key={h.day} style={{
                        display:'flex', justifyContent:'space-between', alignItems:'center',
                        borderBottom:'1px solid rgba(201,168,76,0.1)', paddingBottom:'8px',
                      }}>
                        <span style={{color:'rgba(255,255,255,0.6)', fontSize:'14px'}}>{h.day}</span>
                        <span style={{
                          fontSize:'14px', fontWeight:500,
                          color: h.closed ? '#c41e3a' : '#c9a84c',
                        }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}
