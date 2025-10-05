'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function LandingSection({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  }

  const sectionClasses = cn(className, `w-full pb-10`)

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      className={sectionClasses}
    >
      {children}
    </motion.section>
  )
}
