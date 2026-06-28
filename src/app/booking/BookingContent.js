'use client'
import { useState } from 'react'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/SharedPage'

export default function BookingContent() {
  const [form, setForm] = useState({
    name: '', phone: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi! I would like to book an appointment at Hola Beauty Parlour.\n\nName: ${form.name}\nPhone: ${form.phone}`
    )
    window.open(`https://wa.me/919490939727?text=${msg}`, '_blank')
    setSent(true)
    setForm({ name: '', phone: '' })
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

              <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <FormField label="Your Name *" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter your full name" />
                <FormField label="Mobile Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" />

                <button
                  type="submit"
                  disabled={!isValid}
                  style={{
                    width:'100%', display:'flex', alignItems:'center', justifyContent:'center',
                    gap:'12px', padding:'16px', borderRadius:'2px',
                    fontWeight:700, fontSize:'14px', letterSpacing:'0.1em',
                    textTransform:'uppercase', color:'#0a0000',
                    background:'#25d366', border:'none', cursor: isValid ? 'pointer' : 'not-allowed',
                    boxShadow: isValid ? '0 0 25px #25d36650' : 'none',
                    opacity: isValid ? 1 : 0.4,
                    transition:'all 0.3s',
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book an Appointment
                </button>

                {sent && (
                  <p style={{color:'#25d366', fontSize:'14px', textAlign:'center', fontWeight:600}}>
                    ✓ WhatsApp opened! Send the message to confirm your booking.
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
