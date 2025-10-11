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
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations()
  const projects: Project[] = t.raw('projects.projects')

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
                <Badge key={tech} variant="default" className="capitalize">
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
        {t.rich('projects.title', {
          projects: (chunk) => <span className="text-primary">{chunk}</span>,
        })}
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
