"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  yOffset?: number
  duration?: number
}

export const FadeIn = ({ children, delay = 0, className = "", yOffset = 20, duration = 0.5 }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0 : duration, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
