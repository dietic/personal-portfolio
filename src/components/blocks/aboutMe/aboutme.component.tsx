import { Code, MapPin } from 'lucide-react'
import { Card, CardContent } from '../../ui/card'
import Image from 'next/image'
import { TechStack } from './aboutme.interface'
import LandingSection from '@/components/custom/landingSection.component'

export default function AboutMe() {
  const techStack: TechStack[] = [
    {
      id: 'angular',
      label: 'Angular',
      alt: 'angular-icon',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      id: 'tailwind',
      label: 'TailwindCSS',
      alt: 'tailwind-icon',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      id: 'storybook',
      label: 'Storybook',
      alt: 'storybook-icon',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
    },
  ]

  return (
    <LandingSection>
      <h1 className="font-medium text-4xl text-white">
        About <span className="text-primary">Me</span>
      </h1>
      <p>
        Passionate about creating digital experiences that make a difference
      </p>
      <h2 className="text-xl my-8 font-medium text-white">
        Full-Stack Engineer from Perú
      </h2>
      <p className="mb-4">
        I&apos;m Diego Rios, a software engineer from Lima, Peru — trusted by
        startups and companies to turn ideas into solid, market-ready products.
      </p>
      <p>
        Over the past 5 years, I’ve built everything from finance tools to
        enterprise platforms, always focusing on three things:
      </p>
      <ol className="list-decimal list-inside mt-4 pl-4 text-white">
        <li>Clarity</li>
        <li>Quality</li>
        <li>Growth</li>
      </ol>
      <p className="mt-4">
        I combine a deep understanding of user experience with strong technical
        foundations, but what truly defines my work is ownership — I treat every
        product as if it were my own.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mt-4">
        <Card className="flex items-center sm:flex-1">
          <CardContent className="flex items-center w-full py-4 gap-4">
            <div className="p-2 bg-primary/20 rounded-full text-primary">
              <MapPin height="20" width="20" />
            </div>
            <div>
              <p className="text-white">Location</p>
              <p className="text-primary/60 text-left">Perú</p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex items-center sm:flex-1">
          <CardContent className="flex items-center w-full py-4 gap-4">
            <div className="p-2 bg-secondary/20 rounded-full text-secondary">
              <Code height="20" width="20" />
            </div>
            <div>
              <p className="text-white">Experience</p>
              <p className="text-secondary/60 text-left">5+ years</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl my-8 font-medium text-white">
        Current Project Stack
      </h2>
      <div className="flex gap-4 justify-around">
        {techStack?.length > 0 &&
          techStack.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center">
              <Image src={tech.src} alt={tech.alt} height={40} width={40} />
              <span className="text-xs mt-2">{tech.label}</span>
            </div>
          ))}
      </div>
      <Card className="bg-gradient-to-r from-background/5 to-secondary/5 mt-8 py-8">
        <h2 className="text-xl font-medium text-white text-center">
          What I bring to the table
        </h2>
        <div className="flex flex-col gap-8 pt-6">
          <div className="text-center">
            <h4 className="text-3xl font-medium text-primary">4+</h4>
            <span className="text-gray-600 text-sm">years of experience</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-medium text-secondary">Frontend</h4>
            <span className="text-gray-600 text-sm">specialized focus</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-medium text-primary">UX/UI</h4>
            <span className="text-gray-600 text-sm">growing expertise</span>
          </div>
        </div>
      </Card>
    </LandingSection>
  )
}
