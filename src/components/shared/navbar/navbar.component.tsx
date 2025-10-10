'use client'
import { useScrollY } from '@/hooks/useScrollY'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logoDark from '../../../../public/logo-3.png'
import { NavItem } from './navbar.interface'
import { Toggle } from '@/components/ui/toggle'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const scrollY = useScrollY()
  const scrolled = scrollY > 0
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
      active: activeSection === 'home',
    },
    {
      id: 'about',
      label: 'About',
      href: '#about',
      active: activeSection === 'about',
    },
    {
      id: 'skills',
      label: 'Skills',
      href: '#skills',
      active: activeSection === 'skills',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '#projects',
      active: activeSection === 'projects',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      active: activeSection === 'contact',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMobileNavOpen(false)
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div
        className={cn(
          'flex w-full max-w-[1400px] justify-between items-center py-4 px-16 md:px-32 bg-transparent relative',
          scrolled
            ? 'border-b border-border/10 bg-background/50  backdrop-blur-md'
            : 'border-none',
        )}
      >
        <div>
          <Image src={logoDark} alt="portfolio-logo" width={35} />
        </div>
        {mounted && (
          <Toggle onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            {isDark ? '☀️' : '🌙'}
          </Toggle>
        )}
        <div className="flex md:hidden">
          {/*TODO: the white has to be changed */}
          <button
            className="p-2 rounded-md cursor-pointer hover:bg-secondary hover:text-white"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <Menu />
          </button>
        </div>
        <div className="hidden justify-between gap-10 items-center md:flex">
          {navItems?.length > 0 &&
            navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={handleLinkClick}
                className={cn(
                  item.active ? 'text-primary font-medium' : '',
                  'hover:text-primary transition-colors duration-200',
                )}
              >
                {item.label}
              </Link>
            ))}
        </div>
      </div>
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'w-full bg-background/50 border-b border-border/10 absolute top-[72px] left-0 px-16 flex flex-col gap-2 py-4 backdrop-blur-lg',
            )}
          >
            {navItems?.length > 0 &&
              navItems?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'block py-2 px-4 hover:bg-foreground/20 hover:text-white rounded-md cursor-pointer transition-colors duration-200',
                      item.active ? 'text-primary font-medium' : '',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
