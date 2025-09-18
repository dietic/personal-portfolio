import { ArrowDown, Mail } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import profile from '../.././../public/diego-office.png'
import Image from 'next/image'
export default function Hero() {
  const technologies = [
    { id: 'react', label: 'React' },
    { id: 'next', label: 'Next.js' },
    { id: 'angular', label: 'Angular' },
    { id: 'typescript', label: 'Typescript' },
    { id: 'tailwind', label: 'Tailwind CSS' },
    { id: 'postgres', label: 'PostgreSQL' },
  ]

  return (
    <div className="w-full py-10">
      <h4 className="text-secondary mb-4">Hi, my name is</h4>
      <h1 className="text-4xl text-white font-bold">Diego Rios. </h1>
      <h1 className="text-4xl text-primary font-bold">Frontend Engineer</h1>
      <p className="mt-4">
        I build exceptional web applications using{' '}
        <span className="text-primary font-medium">React</span>,{' '}
        <span className="text-primary font-medium">Next.js</span> and{' '}
        <span className="text-primary font-medium">Angular</span>. From Perú 🇵🇪.
        I specialize in creating scalable frontend solutions with modern
        technologies.
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
      <Button variant="secondary" size="lg" className="mt-4 w-full">
        View my work <ArrowDown />
      </Button>
      <Button variant="outline" size="lg" className="mt-4 w-full">
        Get in touch <Mail />
      </Button>
      <div className="mt-8 relative">
        <Image
          className="rounded-md z-40 relative"
          src={profile}
          alt="diego-profile"
        ></Image>
        <div className="absolute z-10 top-0 left-0 rotate-6 h-full w-full rounded-md bg-linear-to-br from-secondary/20 to-primary/20"></div>
      </div>
      <div className="my-12 w-full">
        <ArrowDown className="mx-auto animate-bounce cursor-pointer" />
      </div>
    </div>
  )
}
