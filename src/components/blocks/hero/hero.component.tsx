'use client'
import { ArrowDown, Mail } from 'lucide-react'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'
import profile from '../../../../public/diego-office.png'
import Image from 'next/image'
import LandingSection from '@/components/custom/landingSection.component'
import { motion } from 'framer-motion'
import { useScrollToSection } from '@/hooks/useScrollToSection'
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

  return (
    <LandingSection className="w-full py-10">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:pr-16 sm:1/2">
          <h4 className="text-secondary mb-4">Hi, my name is</h4>
          <h1 className="text-4xl text-white font-bold">Diego Rios. </h1>
          <h1 className="text-4xl text-primary font-bold">Frontend Engineer</h1>
          <p className="mt-4">
            I help startups and product teams build high-impact, scalable web
            apps using <span className="text-primary font-medium">React</span>,{' '}
            <span className="text-primary font-medium">Next.js</span> and{' '}
            <span className="text-primary font-medium">Angular</span> (and a
            healthy dose of Typescript). Based in Lima, Peru 🇵🇪 — global
            mindset, local excellence.
          </p>
          <p className="mt-4">
            🚀 From landing pages to complex platforms, I make sure your product
            works, looks great, and grows with your business.{' '}
          </p>
          <p className="mt-4">Technologies I work with</p>
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
              View my work <ArrowDown />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="mt-4 w-full sm:w-auto"
              onClick={() => scrollTo('contact')}
            >
              Get in touch <Mail />
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

      <div className="my-12 w-full">
        <ArrowDown
          className="mx-auto animate-bounce cursor-pointer"
          onClick={() => scrollTo('about')}
        />
      </div>
    </LandingSection>
  )
}
