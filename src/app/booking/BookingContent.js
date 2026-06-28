'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/SharedPage'

const EMAIL = 'holanellore@gmail.com'

export default function BookingContent() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '', phone: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const templateParams = {
      customer_name: form.name,
      customer_phone: form.phone,
      email: EMAIL,
    }

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )
      .then(() => {
        setStatus('success')
        setForm({ name: '', phone: '' })
      })
      .catch(() => setStatus('error'))
      .finally(() => setSending(false))
  }

  const isValid = form.name && form.phone

  return (
    <>
      <PageHero title="Book Appointment" tagline="Reserve Your Beauty Session" breadcrumb="Booking" icon="📅" />

      <section style={{background:'#090202', padding:'48px 16px 64px'}} className="sm:py-16 sm:px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <div style={{
              borderRadius:'2px', padding:'20px',
              background:'linear-gradient(175deg, #1c0a08, #0f0404)',
              border:'1px solid #c9a84c30',
            }} className="sm:p-8">
              <h2 style={{
                fontFamily:'Playfair Display, serif',
                fontSize:'20px', fontWeight:900,
                color:'#c9a84c', textAlign:'center',
                marginBottom:'8px',
              }} className="sm:text-2xl">Booking Form</h2>
              <p style={{
                color:'rgba(255,255,255,0.4)', textAlign:'center',
                fontSize:'14px', marginBottom:'32px',
              }}>Fill in your details and we'll get back to you via email to confirm.</p>

              <form ref={formRef} onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <FormField label="Your Name *" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter your full name" />
                <FormField label="Mobile Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" />

                <button
                  type="submit"
                  disabled={!isValid || sending}
                  style={{
                    width:'100%', display:'flex', alignItems:'center', justifyContent:'center',
                    gap:'12px', padding:'16px', borderRadius:'2px',
                    fontWeight:700, fontSize:'14px', letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'#0a0000',
                    background:'#c9a84c', border:'none', cursor: isValid && !sending ? 'pointer' : 'not-allowed',
                    boxShadow: isValid && !sending ? '0 0 25px #c9a84c50' : 'none',
                    opacity: isValid && !sending ? 1 : 0.4,
                    transition:'all 0.3s',
                  }}
                >
                  {sending ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:'spin 1s linear infinite'}}>
                        <circle cx="12" cy="12" r="10" strokeDasharray="31.4 31.4" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M22 7l-10 7L2 7"/>
                      </svg>
                      Book an Appointment
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p style={{color:'#25d366', fontSize:'14px', textAlign:'center', fontWeight:600}}>
                    ✓ Booking request sent! We'll confirm within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{color:'#c41e3a', fontSize:'14px', textAlign:'center', fontWeight:600}}>
                    ✕ Something went wrong. Please try again or contact us directly on WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  const inputStyle = {
    width:'100%', background:'#0f0303',
    border:'1px solid rgba(201,168,76,0.3)',
    borderRadius:'2px', padding:'12px 16px',
    color:'rgba(255,255,255,0.7)', fontSize:'14px',
    fontFamily:'Cormorant Garamond, serif',
    outline:'none', transition:'all 0.3s',
  }

  return (
    <div>
      <label style={{color:'#c9a84c', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:600, display:'block', marginBottom:'8px'}}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.boxShadow = '0 0 10px #c9a84c30' }}
        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
      />
    </div>
  )
}
