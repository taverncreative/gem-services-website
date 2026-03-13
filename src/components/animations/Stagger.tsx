"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

export const StaggerContainer = ({ children, className = "", delayChildren = 0.05, staggerChildren = 0.08 }: { children: ReactNode, className?: string, delayChildren?: number, staggerChildren?: number }) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren
          }
        },
        hidden: {
          opacity: shouldReduceMotion ? 1 : 0
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = "", yOffset = 20 }: { children: ReactNode, className?: string, yOffset?: number }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : yOffset },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
