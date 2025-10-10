'use client'
import LandingSection from '@/components/custom/landingSection.component'
import { Project } from './projects.interface'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'lean-tech',
      name: 'Lean Tech Invocing Platform',
      imgs: [
        'login-new',
        'login-old',
        'invoice-new',
        'invoice-old',
        'create-salary-new',
        'create-salary-old',
      ],
      description:
        'LSS Invoicing is an internal platform that streamlined Lean Tech’s billing process, cutting manual work and boosting efficiency—driving 30%+ savings in operational costs.',
      technologies: ['Angular', 'Tailwind', 'Storybook', 'Figma'],
      url: 'https://www.figma.com/design/L37bLM8IPBQVYB28hOHWVm/New-LSS-Design?node-id=0-1&p=f&t=7cOYK4EOQGDoZr4g-0',
    },
    {
      id: 'personal-cfo',
      name: 'Personal CFO',
      imgs: ['landing', 'login', 'dashboard', 'analytics'],
      description:
        'Personal CFO is a web app that uses AI to extract and categorize bank transactions with a keyword-based system, giving users clear insights into their spending through smart analytics.',
      technologies: ['NextJS', 'Tailwind', 'Python', 'AWS', 'Vercel'],
      url: 'https://personal-cfo.io',
    },
  ]

  const generateProjects = (projects: Project[]) => {
    if (projects.length === 0) return null
    return projects.map((p) => (
      <div key={p.id}>
        <Carousel>
          <CarouselContent>
            {p.imgs.map((i) => (
              <CarouselItem key={i}>
                <div className="w-full h-full relative">
                  <Link href={p.url ? p.url : '#'} target="_blank">
                    <div className="w-full h-full bg-transparent border hover:bg-border/10 rounded-md absolute top-0 left-0 flex items-center justify-center">
                      <ExternalLink />
                    </div>
                    <Image
                      src={`/${i}.png`}
                      alt={i}
                      width={1200}
                      height={600}
                      className="w-full rounded-md border-2 border-border/20"
                    ></Image>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious></CarouselPrevious>
          <CarouselNext></CarouselNext>
        </Carousel>
        <div className="mt-4">
          <h3 className="text-xl text-title font-medium">{p.name}</h3>
          <p>{p.description}</p>
        </div>
        <div className="mt-4">
          <h5 className=" text-title font-medium">TECH STACK</h5>
          <div className="flex gap-4 mt-2 flex-wrap">
            {p?.technologies?.length > 0 &&
              p?.technologies?.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    ))
  }

  return (
    <LandingSection>
      <h1 className="font-medium text-4xl text-title">
        Featured <span className="text-primary">Projects</span>
      </h1>
      <p>
        A showcase of my recent work and the technologies I&apos;ve mastered.
      </p>
      <div className="flex flex-col gap-10 mt-8 px-12">
        {generateProjects(projects)}
      </div>
    </LandingSection>
  )
}
