import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#080303] border-t border-gold-600/20 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="font-script text-5xl text-gold-gradient leading-none block mb-2" style={{fontFamily:'Great Vibes, cursive'}}>Hola</span>
            <p className="text-[10px] tracking-[0.4em] text-gold-500 uppercase mb-4">Beauty Parlour</p>
            <p className="text-white/50 text-sm leading-relaxed" style={{fontFamily:'Cormorant Garamond, serif'}}>
              Where Beauty Meets Perfection. Professional bridal, party & everyday beauty services crafted with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-serif text-lg mb-5 tracking-wide" style={{fontFamily:'Playfair Display, serif'}}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                {label:'Makeup Services', href:'/makeup'},
                {label:'Parlour Services', href:'/parlour'},
                {label:'Home Parlour Services', href:'/home-parlour'},
                {label:'Book Appointment', href:'/booking'},
                {label:'Contact Us', href:'/contact'},
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-white/50 hover:text-gold-400 transition-colors text-sm">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-serif text-lg mb-5 tracking-wide" style={{fontFamily:'Playfair Display, serif'}}>Contact</h4>
            <div className="flex flex-col gap-3 text-white/50 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Near Mahila Pranganam Gate, Santhinagar, Dycusaroad, Podalakur Rd, Andhra Kesari Nagar, Nellore-1, Andhra Pradesh 524004</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+91 94909 39727</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>holanellore@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-600/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Hola Beauty Parlour. All rights reserved.</p>
          <p>Designed with <span className="text-crimson-500">♥</span> for beauty</p>
        </div>
      </div>
    </footer>
  )
}
