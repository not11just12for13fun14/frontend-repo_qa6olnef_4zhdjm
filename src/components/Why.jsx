import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  { title: 'Fresh & Innovative Ideas' },
  { title: 'Intelligent Digital Experiences' },
  { title: 'Immersive User Journeys' },
]

export default function Why() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why" className="relative py-24 sm:py-28 md:py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,107,0,.2),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(255,140,0,.2),transparent_40%)] from-black to-zinc-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">WE MAKE IT SIMPLE BUT <span className="text-orange-500">Significant</span></h2>

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl p-8 border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,.3)]"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/20 blur-2xl" />
              <div className="text-5xl font-extrabold bg-gradient-to-tr from-orange-500 to-amber-400 text-transparent bg-clip-text mb-4">{String(i+1).padStart(2, '0')}</div>
              <p className="text-xl font-semibold">{it.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
