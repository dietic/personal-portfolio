import { MapPin } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export default function AboutMe() {
  const techStack = [
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
    <div className="text-center">
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
        I&apos;m Diego Rios, a passionate full-stack engineer specializing in
        frontend development. With expertise in React, Next.js, and Angular, I
        create beautiful, scalable web applications that deliver exceptional
        user experiences.
      </p>
      <p>
        My journey in web development has led me to work on diverse projects,
        from personal finance tools to enterprise invoicing platforms. I believe
        in writing clean, maintainable code and staying up-to-date with the
        latest technologies and best practices.
      </p>
      <Card className="mt-8 flex items-center">
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
      <Card className="mt-4 flex items-center">
        <CardContent className="flex items-center w-full py-4 gap-4">
          <div className="p-2 bg-secondary/20 rounded-full text-secondary">
            <MapPin height="20" width="20" />
          </div>
          <div>
            <p className="text-white">Experience</p>
            <p className="text-secondary/60 text-left">5+ years</p>
          </div>
        </CardContent>
      </Card>
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
    </div>
  )
}
