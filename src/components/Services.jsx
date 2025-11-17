import { motion } from 'framer-motion'
import { Pencil, Rocket, Globe2, Code2, Clapperboard, ShoppingCart } from 'lucide-react'

const services = [
  { icon: Pencil, title: 'Graphic Design', id: 'graphic' },
  { icon: Rocket, title: 'Branding Services', id: 'branding' },
  { icon: Globe2, title: 'Digital Marketing', id: 'marketing' },
  { icon: Code2, title: 'Website Development', id: 'webdev' },
  { icon: Clapperboard, title: 'Video Production', id: 'video' },
  { icon: ShoppingCart, title: 'E-Commerce Solutions (Mobile / Web)', id: 'ecom' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 md:py-32 bg-[#2B2B2B] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,120,0,.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,120,0,.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
        <p className="mt-3 text-white/80 max-w-2xl">Solutions crafted to transform your brand into a superbrand.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#3A3A3A]/70 backdrop-blur-sm p-6 sm:p-7 flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,.25)] hover:shadow-[0_20px_60px_rgba(255,120,0,.15)]"
            >
              <div className="relative h-14 w-14 shrink-0 grid place-items-center rounded-xl bg-black/60 border border-white/10 transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 rounded-xl bg-orange-500/0 group-hover:bg-orange-500/15 blur-md transition-colors" />
                <s.icon className="relative h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-lg sm:text-xl font-bold">{s.title}</p>
                <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
