import LandingSection from '@/components/custom/landingSection.component'
import { Project } from './projects.interface'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

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
      technologies: ['angular', 'tailwind'],
    },
    {
      id: 'personal-cfo',
      name: 'Lean Tech Invocing Platform',
      imgs: [
        'login-new',
        'login-old',
        'invoice-new',
        'invoice-old',
        'create-salary-new',
        'create-salary-old',
      ],
      description: 'test description',
      technologies: ['angular', 'tailwind'],
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
                <Image
                  src={`/${i}.png`}
                  alt={i}
                  width={400}
                  height={200}
                  className="w-full"
                ></Image>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious></CarouselPrevious>
          <CarouselNext></CarouselNext>
        </Carousel>
        <div className="mt-4">
          <h3 className="text-xl text-white font-medium">{p.name}</h3>
          <p>{p.description}</p>
        </div>
        <div className="mt-4">
          <h5 className=" text-white font-medium">TECH STACK</h5>
          <div className="flex gap-4 mt-2">
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
      <h1 className="font-medium text-4xl text-white">
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
