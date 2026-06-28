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
          display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', width:'auto',
          background: selectedTier ? '#25d366' : '#25d36630',
          color: selectedTier ? '#fff' : 'rgba(255,255,255,0.35)',
          padding:'12px 0', borderRadius:'4px',
          fontSize:'13px', fontWeight:700, letterSpacing:'0.12em',
          textTransform:'uppercase', textDecoration:'none',
          margin:'16px 16px 18px', border:'none', cursor: selectedTier ? 'pointer' : 'not-allowed',
          transition:'all 0.3s',
          boxShadow: selectedTier ? '0 0 12px rgba(37,211,102,0.3)' : 'none',
        }}
        onMouseEnter={e => { if (selectedTier) { e.currentTarget.style.background = '#1da851'; e.currentTarget.style.boxShadow = '0 0 18px rgba(37,211,102,0.45)' } }}
        onMouseLeave={e => { if (selectedTier) { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.boxShadow = '0 0 12px rgba(37,211,102,0.3)' } }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{opacity: selectedTier ? 1 : 0.35}}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {selectedTier ? `Book Now – ${selectedTier.label}` : 'Select a Package'}
      </button>
    </div>
  )
}
