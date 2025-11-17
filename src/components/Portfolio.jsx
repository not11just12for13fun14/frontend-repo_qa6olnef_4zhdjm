import { motion } from 'framer-motion'

const projects = Array.from({ length: 8 }).map((_, i) => ({ id: i, title: `Project ${i+1}`, img: `https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop` }))

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-28 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Work Teaser</h2>
          <p className="text-white/70">We are proud of what we have done but believe our best is yet to come!</p>
        </div>

        <div className="mt-10 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex gap-6 min-w-max pr-8">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative w-[280px] sm:w-[340px] md:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
                style={{ perspective: '1000px' }}
              >
                <img src={p.img} alt="thumb" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-orange-400/40 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="px-3 py-1 rounded-full border border-white/20 text-sm text-white/80 group-hover:border-orange-400 group-hover:text-orange-400 transition-colors">View</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
