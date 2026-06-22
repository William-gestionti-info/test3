import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
}

export default function AnimatedStat({ value, suffix = '', prefix = '', label, decimals = 0 }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 })
  const displayRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isInView) motionVal.set(value)
  }, [isInView, motionVal, value])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = prefix + v.toFixed(decimals) + suffix
      }
    })
  }, [spring, prefix, suffix, decimals])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-navy-700">
        <span ref={displayRef}>{prefix}0{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-warm-light uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}
