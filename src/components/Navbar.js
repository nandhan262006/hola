'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div style={{maxWidth:'980px',margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px'}}>

        {/* ── LOGO ── */}
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'8px',textDecoration:'none'}}>
          <img src="/images/logobg.png" alt="Hola Beauty Parlour – Logo" style={{height:'50px', width:'auto'}} />
          <span style={{fontFamily:'Great Vibes, cursive', fontSize:'32px', color:'#c9a84c', lineHeight:1, marginTop:'4px'}}>Hola</span>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div style={{display:'flex',alignItems:'center',gap:'36px'}} className="nav-links-desktop hidden md:flex">
          {[['Home','/'],['About','/#about'],['Services','/#services'],['Gallery','/gallery'],['Contact Us','/contact']].map(([label,href])=>(
            <Link key={href} href={href} style={{
              fontFamily:'Cormorant Garamond,serif',fontSize:'15px',fontWeight:500,
              color: label==='Home' ? '#c9a84c' : 'rgba(255,255,255,0.85)',
              textDecoration: label==='Home' ? 'underline' : 'none',
              textUnderlineOffset:'4px',letterSpacing:'0.04em',
              transition:'color .25s'
            }}>{label}</Link>
          ))}
          <a href="https://wa.me/919490939727?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Hola%20Beauty%20Parlour." target="_blank" rel="noopener noreferrer" style={{
            background:'transparent',border:'1.5px solid #c41e3a',
            color:'#fff',fontFamily:'Cormorant Garamond,serif',fontSize:'14px',
            fontWeight:700,letterSpacing:'0.1em',padding:'8px 22px',
            borderRadius:'5px',textDecoration:'none',transition:'all .3s',
          }}
          onMouseEnter={e=>e.currentTarget.style.background='#c41e3a30'}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}
          >Book Now</a>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={()=>setOpen(!open)}
          style={{background:'none',border:'none',color:'#c9a84c',cursor:'pointer'}}>
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{background:'rgba(8,2,2,0.97)',padding:'16px 24px 24px',borderTop:'1px solid #c9a84c20'}}>
          {[['Home','/'],['About','/#about'],['Makeup','/makeup'],['Parlour','/parlour'],['Home Parlour','/home-parlour'],['Gallery','/gallery'],['Contact','/contact'],['Book Now','https://wa.me/919490939727?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Hola%20Beauty%20Parlour.']].map(([l,h])=>(
            <Link key={h} href={h} onClick={()=>setOpen(false)}
              style={{display:'block',padding:'10px 0',color:'rgba(255,255,255,0.75)',
                fontFamily:'Cormorant Garamond,serif',fontSize:'16px',
                borderBottom:'1px solid #c9a84c12',textDecoration:'none'}}>
              {l}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
