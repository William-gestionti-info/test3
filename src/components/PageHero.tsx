import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  badge: string
  title: string
  highlight?: string
  subtitle: string
  ctaLabel?: string
  ctaTo?: string
  bgClass?: string
}

export default function PageHero({
  badge, title, highlight, subtitle, ctaLabel, ctaTo, bgClass = ''
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-20 overflow-hidden ${bgClass}`}
      style={{ background: 'linear-gradient(145deg, #0f2940 0%, #163a57 60%, #1e4e72 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #7aadc8 0%, transparent 70%)', transform:'translate(30%,-30%)'}} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #9db99d 0%, transparent 70%)', transform:'translate(-30%,30%)'}} />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-5 tracking-wide" style={{background:'rgba(255,255,255,0.12)',color:'#c8d9c8'}}>
            {badge}
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-semibold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {title}
          {highlight && <><br /><span className="text-blue-300">{highlight}</span></>}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        {ctaLabel && ctaTo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <Link to={ctaTo} className="btn-primary">{ctaLabel}</Link>
          </motion.div>
        )}
      </div>
      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fdfcf8"/>
        </svg>
      </div>
    </section>
  )
}
