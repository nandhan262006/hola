import Link from 'next/link'

export function boostPrice(priceStr) {
  return priceStr.replace(/\d[\d,]*/g, (match) => {
    const num = parseInt(match.replace(/,/g, ''), 10)
    return Math.round(num * 1.2).toLocaleString('en-IN')
  })
}

export function PageHero({ title, tagline, icon, breadcrumb }) {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0000]"/>
      <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 60% 60% at 50% 50%, #8b1a1a18 0%, transparent 70%)'}}/>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-[#c9a84c] bg-[#1a0808] flex items-center justify-center shadow-[0_0_25px_#c9a84c50] text-3xl">
            {icon}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-white/30 text-xs tracking-widest uppercase mb-3">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-[#c9a84c]">{breadcrumb}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-3 gold-shimmer" style={{fontFamily:'Playfair Display, serif'}}>
          {title}
        </h1>
        <p className="text-white/40 italic" style={{fontFamily:'Great Vibes, cursive', fontSize:'28px'}}>{tagline}</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="#c9a84c" style={{filter:'drop-shadow(0 0 4px #c9a84c80)'}}>
            <path d="M8 1L9.5 5.5H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 5.5H6.5L8 1Z"/>
          </svg>
          <div className="h-px w-16" style={{background:'#c9a84c60'}}/>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ sub, title }) {
  return (
    <div className="text-center">
      <p className="text-[#8b1a1a] tracking-[0.45em] text-xs uppercase mb-1" style={{fontFamily:'Cormorant Garamond, serif'}}>{sub}</p>
      <h2 className="text-3xl md:text-4xl font-black text-white" style={{fontFamily:'Playfair Display, serif'}}>
        {title}
      </h2>
      <div className="h-px w-20 mx-auto mt-3" style={{background:'linear-gradient(to right, transparent, #c9a84c, transparent)'}}/>
    </div>
  )
}

export function ServiceItem({ name, desc, price, popular, bg }) {
  return (
    <div className="service-card rounded-lg overflow-hidden relative flex flex-col border" style={{borderColor:'#c9a84c30'}}>
      {popular && (
        <div className="absolute top-3 right-3 z-10 text-white text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full font-bold"
          style={{background:'#c41e3a'}}>
          Popular
        </div>
      )}
      <div style={{height:'140px', background: bg || 'linear-gradient(160deg, #1a0a15, #0d050a)', position:'relative', overflow:'hidden'}}>
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse at 50% 0%, #c41e3a20 0%, transparent 60%)',
        }}/>
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:'60px',
          background:'linear-gradient(to top, #0f0404, transparent)',
        }}/>
      </div>
      <div style={{background:'linear-gradient(175deg, #1c0a08, #0f0404)', padding:'12px 16px 16px', flex:1, display:'flex', flexDirection:'column'}}>
        <h3 className="font-bold mb-1" style={{fontFamily:'Playfair Display, serif', color:'#c9a84c', fontSize:'clamp(13px,2vw,16px)'}}>{name}</h3>
        <p className="text-white/40 leading-relaxed mb-2 flex-1" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(12px,2vw,13px)'}}>{desc}</p>
        <div className="text-xs font-semibold pt-2 border-t" style={{color:'#f0d070', borderColor:'#c9a84c15'}}>
          <span style={{textDecoration:'line-through', color:'rgba(255,255,255,0.3)', fontWeight:400, marginRight:'6px'}}>{boostPrice(price)}</span>
          {price}
        </div>
      </div>
    </div>
  )
}

export function BookingCTA() {
  const msg = encodeURIComponent('Hi! I would like to book an appointment at Hola Beauty Parlour.')
  return (
    <section className="py-16 px-6 text-center" style={{background:'linear-gradient(135deg, #0a0000, #150505)'}}>
      <div className="max-w-xl mx-auto">
        <p className="text-[#c9a84c]/60 text-xs tracking-widest uppercase mb-2">Ready to look stunning?</p>
        <h2 className="text-4xl font-black text-white mb-4" style={{fontFamily:'Playfair Display, serif'}}>Book Your <span className="gold-shimmer">Appointment</span></h2>
        <p className="text-white/40 mb-8 text-sm">Contact us via WhatsApp or walk in. We'd love to make you look your best!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/919490939727?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase text-white"
            style={{background:'#25d366', boxShadow:'0 0 20px #25d36640'}}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
          <Link href="/booking" className="btn-outline rounded-sm px-6 py-3 text-sm font-bold tracking-widest uppercase">
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
