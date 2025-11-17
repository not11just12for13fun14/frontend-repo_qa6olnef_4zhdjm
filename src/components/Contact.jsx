import { motion } from 'framer-motion'
import { Mail, Instagram, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 md:py-32 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(255,107,0,.25),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">LET'S MAKE SOMETHING GREAT <span className="text-orange-500">together!</span></h2>
            <div className="mt-2 h-[3px] w-32 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />

            <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input placeholder="Name" className="bg-transparent border border-orange-500/50 focus:border-orange-500 rounded-lg px-4 py-3 outline-none text-white placeholder-white/50" />
              <input placeholder="Email" className="bg-transparent border border-orange-500/50 focus:border-orange-500 rounded-lg px-4 py-3 outline-none text-white placeholder-white/50" />
              <input placeholder="Phone" className="bg-transparent border border-orange-500/50 focus:border-orange-500 rounded-lg px-4 py-3 outline-none text-white placeholder-white/50" />
              <textarea placeholder="Message" rows="5" className="sm:col-span-2 bg-transparent border border-orange-500/50 focus:border-orange-500 rounded-lg px-4 py-3 outline-none text-white placeholder-white/50" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 text-black font-semibold shadow-[0_0_45px_rgba(255,120,0,.6)] hover:scale-[1.03] transition-transform">
                Submit
              </button>
            </form>
          </div>

          <div className="w-full lg:w-80 xl:w-96 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              <div className="flex items-center gap-3 text-white/90"><Mail className="text-orange-400" size={20} /> info@triosept.com</div>
              <div className="mt-3 flex items-center gap-3 text-white/90"><Instagram className="text-orange-400" size={20} /> triosept9</div>
              <div className="mt-3 flex items-center gap-3 text-white/90"><Phone className="text-orange-400" size={20} /> +91 96872 72246</div>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-tr from-orange-600/20 to-amber-400/10 p-6 text-center text-white shadow-[0_20px_60px_rgba(255,120,0,.15)]">
              <div className="text-sm tracking-wide">GET FREE DIGITAL MARKETING CONSULTATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
