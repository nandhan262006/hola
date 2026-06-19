import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      background:'#0a0000', color:'#fff', padding:'40px', textAlign:'center',
    }}>
      <h1 style={{
        fontFamily:'Playfair Display,serif',
        fontSize:'clamp(48px,8vw,96px)', fontWeight:900,
        color:'#c9a84c', marginBottom:'12px',
      }}>404</h1>
      <p style={{
        fontFamily:'Cormorant Garamond,serif',
        fontSize:'20px', color:'rgba(255,255,255,0.6)', marginBottom:'24px',
      }}>Page not found</p>
      <Link href="/" style={{
        padding:'12px 32px', background:'#c9a84c', color:'#0a0000',
        border:'none', borderRadius:'2px', cursor:'pointer',
        fontFamily:'Cormorant Garamond,serif', fontSize:'14px', fontWeight:700,
        letterSpacing:'0.12em', textTransform:'uppercase', textDecoration:'none',
      }}>
        Back to Home
      </Link>
    </div>
  )
}
