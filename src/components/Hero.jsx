import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-orange-400/70 shadow-[0_0_10px_rgba(255,120,0,.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_0_30px_rgba(255,120,0,.25)]"
          >
            {"WE DON'T THINK BIG, WE THINK GIANT".split('').map((ch, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.03 } }
                }}
                className={ch === ' ' ? 'inline-block w-2 sm:w-3' : ''}
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl"
          >
            We convert Brands into Superbrands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 text-black font-semibold shadow-[0_0_45px_rgba(255,120,0,.6)] hover:scale-[1.03] transition-transform">
              Get Free Consultation
            </a>
            <a href="#portfolio" className="group pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:border-orange-400 hover:text-orange-400 transition-colors">
              View Our Work
            </a>
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="h-12 w-7 rounded-full border-2 border-orange-500 flex items-start justify-center p-1">
              <span className="h-2 w-1 rounded-full bg-orange-500 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: .8 }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1 }
        }
      `}</style>
    </section>
  )
}
