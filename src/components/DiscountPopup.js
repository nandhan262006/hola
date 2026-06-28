'use client'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const EMAIL = 'holanellore@gmail.com'

export default function DiscountPopup() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60000)
    return () => clearTimeout(timer)
  }, [])

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

  if (!visible) return null

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:9998,
      display:'flex', alignItems:'center', justifyContent:'center',
      background:'rgba(0,0,0,0.6)', backdropFilter:'blur(3px)',
      animation:'fadeIn 0.4s ease',
    }}>
      <div style={{
        maxWidth:'340px', width:'90%',
        animation:'slideUp 0.5s ease',
      }}>
      <div style={{
        background:'linear-gradient(160deg, #2a0510, #1a0308)',
        border:'1px solid #c9a84c40',
        borderRadius:'2px',
        padding:'28px 24px 22px',
        boxShadow:'0 0 40px #c9a84c20, 0 10px 40px rgba(0,0,0,0.6)',
        position:'relative',
        textAlign:'center',
      }}>
        <button
          onClick={() => setVisible(false)}
          style={{
            position:'absolute', top:'6px', right:'10px',
            background:'transparent', border:'none',
            color:'rgba(255,255,255,0.3)', cursor:'pointer',
            fontSize:'14px', lineHeight:1, padding:'4px',
          }}
        >
          ✕
        </button>
        <div style={{
          fontFamily:'Playfair Display, serif',
          color:'#c9a84c', fontSize:'16px', fontWeight:700,
          marginBottom:'8px',
        }}>
          🎉 Special Offer!
        </div>
        <p style={{
          fontFamily:'Cormorant Garamond, serif',
          color:'rgba(255,255,255,0.85)',
          fontSize:'16px', lineHeight:1.6, margin:'0 0 8px',
        }}>
          <strong style={{color:'#f0d070'}}>20% off</strong> on the total bill!
        </p>

        <div style={{
          fontFamily:'Playfair Display, serif',
          color:'#c9a84c', fontSize:'18px', fontWeight:700,
          margin:'18px 0 16px',
        }}>
          Fill the Details
        </div>

        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name *"
            style={{
              width:'100%', background:'#0f0303',
              border:'1px solid rgba(201,168,76,0.3)',
              borderRadius:'2px', padding:'12px 16px',
              color:'rgba(255,255,255,0.7)', fontSize:'14px',
              fontFamily:'Cormorant Garamond, serif',
              outline:'none', boxSizing:'border-box',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.boxShadow = '0 0 10px #c9a84c30' }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Mobile Number *"
            style={{
              width:'100%', background:'#0f0303',
              border:'1px solid rgba(201,168,76,0.3)',
              borderRadius:'2px', padding:'12px 16px',
              color:'rgba(255,255,255,0.7)', fontSize:'14px',
              fontFamily:'Cormorant Garamond, serif',
              outline:'none', boxSizing:'border-box',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.boxShadow = '0 0 10px #c9a84c30' }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
          />

          <button
            type="submit"
            disabled={!isValid || sending}
            style={{
              display:'inline-block',
              background:'#c9a84c', color:'#0a0000',
              padding:'10px 24px', borderRadius:'2px',
              fontSize:'11px', fontWeight:700, letterSpacing:'0.1em',
              textTransform:'uppercase', textDecoration:'none',
              border:'none', cursor: isValid && !sending ? 'pointer' : 'not-allowed',
              opacity: isValid && !sending ? 1 : 0.4,
              transition:'all 0.3s',
            }}
          >
            {sending ? 'Sending...' : 'Book an Appointment'}
          </button>

          {status === 'success' && (
            <p style={{color:'#25d366', fontSize:'13px', textAlign:'center', fontWeight:600, margin:0}}>
              ✓ Booking request sent! We'll confirm within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p style={{color:'#c41e3a', fontSize:'13px', textAlign:'center', fontWeight:600, margin:0}}>
              ✕ Something went wrong. Please try again or contact us on WhatsApp.
            </p>
          )}
        </form>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
    </div>
  )
}
