'use client'
import { useScrollY } from '@/hooks/useScrollY'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from '../../../../public/dhq-logo-purple.png'
import isotype from '../../../../public/dhq-isotype-purple.png'
import { NavItem } from './navbar.interface'
import { Toggle } from '@/components/ui/toggle'
import { useTheme } from 'next-themes'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  useEffect(() => setMounted(true), [])

  const { resolvedTheme, setTheme } = useTheme()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)

  const scrollY = useScrollY()
  const scrolled = scrollY > 0

  const router = useRouter()
  const t = useTranslations()

  const locale = useLocale()
  useEffect(() => {
    console.log('locale', locale)
  }, [locale])
  const navItems: NavItem[] = [
    {
      id: 'home',
      label: `${t('navbar.items.home')}`,
      href: '#home',
      active: activeSection === 'home',
    },
    {
      id: 'about',
      label: `${t('navbar.items.about')}`,
      href: '#about',
      active: activeSection === 'about',
    },
    {
      id: 'skills',
      label: `${t('navbar.items.skills')}`,
      href: '#skills',
      active: activeSection === 'skills',
    },
    {
      id: 'projects',
      label: `${t('navbar.items.projects')}`,
      href: '#projects',
      active: activeSection === 'projects',
    },
    {
      id: 'contact',
      label: `${t('navbar.items.contact')}`,
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

  const handleLocaleChange = (value: string) => {
    console.log('locale', value)
    router.push(`/${value}`)
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div
        className={cn(
          'flex w-full max-w-[1400px] justify-between items-center py-4 px-8 sm:px-16 md:px-32 bg-transparent relative',
          scrolled
            ? 'border-b border-border/10 bg-background/50  backdrop-blur-md'
            : 'border-none',
        )}
      >
        <div>
          <Image
            src={logo}
            alt="portfolio-logo"
            height={30}
            className="hidden md:block min-w-[80px]"
          />
          <Image
            src={isotype}
            alt="portfolio-logo"
            height={30}
            className="md:hidden"
          />
        </div>
        <div className="flex gap-4">
          {mounted && (
            <Toggle onClick={() => setTheme(isDark ? 'light' : 'dark')}>
              {isDark ? '☀️' : '🌙'}
            </Toggle>
          )}
          <Tabs
            defaultValue={locale}
            onValueChange={(value) => handleLocaleChange(value)}
          >
            <TabsList>
              <TabsTrigger value="en">EN</TabsTrigger>
              <TabsTrigger value="es">ES</TabsTrigger>
            </TabsList>
          </Tabs>
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
