'use client'
import Link from 'next/link'
import Image from 'next/image'
import logoDark from '../../../../public/logo-3.png'
import { useScrollY } from '@/hooks/useScrollY'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavItem } from './navbar.interface'

export default function Navbar() {
  const scrollY = useScrollY()
  const scrolled = scrollY > 0
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '#',
      active: true,
    },
    {
      id: 'about',
      label: 'About',
      href: '#',
      active: false,
    },
    {
      id: 'skills',
      label: 'Skills',
      href: '#',
      active: false,
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '#',
      active: false,
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#',
      active: false,
    },
  ]

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
                className={cn(
                  item.active ? 'text-primary font-medium' : '',
                  'hover:text-primary',
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
                <li
                  key={item.id}
                  className="py-2 px-4 hover:bg-foreground/20 hover:text-white rounded-md cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
