import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400" />
              <span className="font-extrabold tracking-wide text-white">Triosept <span className="text-orange-500">Studio</span></span>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-xs">A marketing agency that transforms brands into superbrands.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              <li><a href="#approach" className="hover:text-orange-400">Approach</a></li>
              <li><a href="#why" className="hover:text-orange-400">Why Us</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Social</div>
            <div className="flex items-center gap-4 text-white/70">
              <a href="#" className="hover:text-orange-400"><Facebook size={18} /></a>
              <a href="#" className="hover:text-orange-400"><Instagram size={18} /></a>
              <a href="#" className="hover:text-orange-400"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-orange-400"><Twitter size={18} /></a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Newsletter</div>
            <div className="flex items-center gap-2">
              <input placeholder="Your email" className="flex-1 bg-transparent border border-white/20 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500" />
              <button className="px-4 py-2 rounded-md bg-gradient-to-tr from-orange-600 to-amber-400 text-black text-sm font-semibold">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60">© {new Date().getFullYear()} Triosept Studio. All rights reserved.</div>
      </div>
    </footer>
  )
}
