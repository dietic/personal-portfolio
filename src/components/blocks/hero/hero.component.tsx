'use client'
import { ArrowDown, Mail } from 'lucide-react'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import profile from '../../../../public/diego-office.png'
import Image from 'next/image'
import LandingSection from '@/components/custom/landingSection.component'
import { motion } from 'framer-motion'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useTranslations } from 'next-intl'
export default function Hero() {
  const scrollTo = useScrollToSection()
  const technologies = [
    { id: 'react', label: 'React' },
    { id: 'next', label: 'Next.js' },
    { id: 'angular', label: 'Angular' },
    { id: 'typescript', label: 'Typescript' },
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'postgres', label: 'PostgreSQL' },
  ]
  const t = useTranslations()

  return (
    <LandingSection className="w-full py-10">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:pr-16 sm:1/2">
          <h4 className="text-secondary mb-4">{t('hero.greeting')}</h4>
          <h1 className="text-4xl text-title font-bold">Diego Rios. </h1>
          <h1 className="text-4xl text-primary font-bold">Frontend Engineer</h1>
          {/* Change for conjunction */}
          <p className="mt-4">
            {t.rich('hero.description', {
              react: (chunk) => (
                <span className="text-primary font-medium">{chunk}</span>
              ),
              next: (chunk) => (
                <span className="text-primary font-medium">{chunk}</span>
              ),
              angular: (chunk) => (
                <span className="text-primary font-medium">{chunk}</span>
              ),
            })}
          </p>
          <p className="mt-4">{t('hero.description3')} </p>
          <p className="mt-4">{t('hero.techstackSubtitle')}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies?.length > 0 &&
              technologies.map((tech) => (
                <Badge key={tech.id} variant="default">
                  {tech.label}
                </Badge>
              ))}
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="mt-4 w-full sm:w-auto"
              onClick={() => scrollTo('projects')}
            >
              {t('hero.buttons.work')} <ArrowDown />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="mt-4 w-full sm:w-auto"
              onClick={() => scrollTo('contact')}
            >
              {t('hero.buttons.contact')} <Mail />
            </Button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="mt-8 relative ">
            <Image
              className="rounded-md z-40 relative "
              src={profile}
              alt="diego-profile"
            ></Image>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 5, transition: { duration: 1 } }}
              className="absolute z-10 top-0 left-0  h-full w-full rounded-md bg-linear-to-br from-secondary/20 to-primary/20"
            ></motion.div>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <ArrowDown
          className="mx-auto animate-bounce cursor-pointer"
          onClick={() => scrollTo('about')}
        />
      </div>
    </LandingSection>
  )
}
