import { motion } from 'framer-motion'

const steps = ['THINK', 'STRATEGY', 'CREATIVE', 'PRODUCTION', 'INNOVATION', 'REACH']

export default function Approach() {
  return (
    <section id="approach" className="relative py-24 sm:py-28 md:py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Our Approach</h2>
        <p className="mt-3 text-black/70 max-w-3xl">Our approach combines user, business and stakeholder requirements through different creative production stages</p>

        <div className="mt-14 grid place-items-center">
          <div className="relative w-full max-w-3xl aspect-square">
            {/* connection ring */}
            <div className="absolute inset-0 rounded-full border-2 border-orange-500/40" />
            {/* orbiting nodes */}
            {steps.map((label, i) => {
              const angle = (i / steps.length) * 2 * Math.PI
              const r = 180
              const x = Math.cos(angle) * r
              const y = Math.sin(angle) * r
              return (
                <motion.div
                  key={label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 220, damping: 20 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="absolute"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2 grid place-items-center">
                    <span className="absolute h-16 w-16 rounded-full bg-orange-500/15 blur-xl" />
                    <div className="relative h-16 w-16 rounded-full bg-white shadow-xl border-2 border-orange-500 grid place-items-center font-bold text-sm">
                      <span className="text-orange-600">{label}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
            {/* radial lines */}
            {steps.map((_, i) => (
              <div key={i} className="absolute left-1/2 top-1/2 w-1/2 h-px origin-left rotate-0" style={{ transform: `rotate(${(i/steps.length)*360}deg)`, background: 'linear-gradient(90deg, rgba(255,107,0,0.7), rgba(255,140,0,0.2), transparent)' }} />
            ))}

            {/* center text */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="max-w-md text-center text-sm sm:text-base text-black/70">
                Our approach combines user, business and stakeholder requirements through different creative production stages
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
