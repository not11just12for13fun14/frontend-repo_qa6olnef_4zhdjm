import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Why Us', href: '#why' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 shadow-[0_0_30px_rgba(255,120,0,.6)]" />
          <span className="font-extrabold tracking-wide text-white">Triosept <span className="text-orange-500">Studio</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/80 hover:text-white transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-black font-semibold shadow-[0_0_35px_rgba(255,120,0,.5)] hover:scale-[1.03] transition-transform">Get Free Consultation</a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu className="text-orange-400" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl text-white font-medium hover:text-orange-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-black font-semibold shadow-[0_0_35px_rgba(255,120,0,.5)]">Get Free Consultation</a>
        </div>
      )}
    </header>
  )
}
