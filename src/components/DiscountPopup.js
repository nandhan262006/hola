'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DiscountPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60000)
    return () => clearTimeout(timer)
  }, [])

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
          fontSize:'16px', lineHeight:1.6, margin:'0 0 18px',
        }}>
          Book now and get <strong style={{color:'#f0d070'}}>20% off</strong> on the total bill!
        </p>
        <Link
          href="/booking"
          onClick={() => setVisible(false)}
          style={{
            display:'inline-block',
            background:'#c9a84c', color:'#0a0000',
            padding:'10px 24px', borderRadius:'2px',
            fontSize:'11px', fontWeight:700, letterSpacing:'0.1em',
            textTransform:'uppercase', textDecoration:'none',
            transition:'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#f0d070'; e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.transform = 'scale(1)' }}
        >
          Click Here
        </Link>
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
