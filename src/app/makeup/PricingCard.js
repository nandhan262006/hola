'use client'

import { useState } from 'react'
import { boostPrice } from '@/components/SharedPage'

export default function PricingCard({ name, tiers, gradient, popular }) {
  const [selectedTier, setSelectedTier] = useState(null)

  const handleBook = () => {
    if (!selectedTier) return
    const msg = `Hi! I would like to book an appointment for ${name} – ${selectedTier.label} (${selectedTier.price}) at Hola Beauty Parlour.`
    window.open(`https://wa.me/919490939727?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }

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
        {tiers.map((tier, i) => {
          const isSelected = selectedTier?.label === tier.label
          return (
            <button
              key={tier.label}
              onClick={() => setSelectedTier(tier)}
              style={{
                display:'flex', justifyContent:'space-between',
                alignItems:'center', width:'100%',
                padding:'12px 20px', cursor:'pointer',
                border:'none', outline:'none',
                fontFamily:'inherit', fontSize:'inherit',
                background: isSelected ? 'rgba(201,168,76,0.1)' : 'transparent',
                borderBottom: i < tiers.length - 1 ? '1px solid #c9a84c10' : 'none',
                borderLeft: isSelected ? '3px solid #c9a84c' : '3px solid transparent',
                transition:'all 0.2s',
              }}
            >
              <span style={{
                display:'flex', alignItems:'center', gap:'8px',
                fontFamily:'Cormorant Garamond, serif',
                fontSize:'14px', color: isSelected ? '#f0d070' : 'rgba(255,255,255,0.6)',
                letterSpacing:'0.1em',
              }}>
                <span style={{
                  width:'10px', height:'10px', borderRadius:'50%',
                  border: isSelected ? '3px solid #c9a84c' : '1.5px solid rgba(255,255,255,0.3)',
                  background: isSelected ? '#c9a84c' : 'transparent',
                  display:'inline-block',
                  transition:'all 0.2s',
                }} />
                {tier.label}
              </span>
              <span style={{
                fontFamily:'Playfair Display, serif',
                fontSize:'15px', fontWeight:600,
                color:'#f0d070',
              }}>
                <span style={{textDecoration:'line-through', color:'rgba(255,255,255,0.3)', fontWeight:400, marginRight:'6px', fontSize:'13px'}}>{boostPrice(tier.price)}</span>
                {tier.price}
              </span>
            </button>
          )
        })}
      </div>
      <button
        onClick={handleBook}
        disabled={!selectedTier}
        style={{
          display:'block', textAlign:'center', width:'auto',
          background: selectedTier ? '#25d366' : '#25d36640',
          color: selectedTier ? '#fff' : 'rgba(255,255,255,0.4)',
          padding:'10px 0', borderRadius:'2px',
          fontSize:'11px', fontWeight:700, letterSpacing:'0.1em',
          textTransform:'uppercase', textDecoration:'none',
          margin:'12px 16px 16px', border:'none', cursor: selectedTier ? 'pointer' : 'not-allowed',
          transition:'all 0.3s',
        }}
      >
        {selectedTier ? `Book ${selectedTier.label}` : 'Select a Package'}
      </button>
    </div>
  )
}
