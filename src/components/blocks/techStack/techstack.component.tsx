'use client'
import LandingSection from '@/components/custom/landingSection.component'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Tech } from './techstack.interface'
export default function TechStack() {
  const techStacks: Tech[] = [
    {
      type: 'frontend',
      icon: 'code-xml',
      skills: [
        {
          tech: 'React',
          level: 'advanced',
          exp: '3+ years',
          description:
            'Complex state management, custom hooks, performance optimization',
        },
        {
          tech: 'Next.js',
          level: 'advanced',
          exp: '2+ years',
          description:
            'Fast, SEO-ready apps with smart routing and server rendering.',
        },
        {
          tech: 'Angular',
          level: 'intermediate',
          exp: '2+ years',
          description:
            'Robust, scalable interfaces for enterprise-grade projects.',
        },
        {
          tech: 'TypeScript',
          level: 'advanced',
          exp: '3+ years',
          description: 'Safer, cleaner, and more reliable code at scale.',
        },
        {
          tech: 'JavaScript',
          level: 'advanced',
          exp: '4+ years',
          description: 'Modern, fast, and reliable web interactions.',
        },
      ],
    },
    {
      type: 'styling',
      icon: 'palette',
      skills: [
        {
          tech: 'Tailwind CSS',
          level: 'advanced',
          exp: '2+ years',
          description: 'Clean, responsive designs built fast and consistently.',
        },
        {
          tech: 'Storybook',
          level: 'intermediate',
          exp: '1+ year',
          description: 'Component documentation, design system maintenance',
        },
        {
          tech: 'CSS/SCSS',
          level: 'advanced',
          exp: '4+ years',
          description:
            'Polished layouts, smooth animations, and clean structure.',
        },
        {
          tech: 'Responsiveness',
          level: 'advanced',
          exp: '4+ years',
          description: 'Pixel-perfect experiences on every screen size.',
        },
      ],
    },
    {
      type: 'backend',
      icon: 'database',
      skills: [
        {
          tech: 'PostgreSQL',
          level: 'intermediate',
          exp: '1+ year',
          description: 'Reliable data handling with optimized queries.',
        },
        {
          tech: 'Supabase',
          level: 'intermediate',
          exp: '1+ year',
          description: 'Fast, secure backend setup with real-time data.',
        },
        {
          tech: 'Node.js',
          level: 'basic',
          exp: '6 months',
          description:
            'Lightweight APIs and server logic for quick integration.',
        },
        {
          tech: 'Python',
          level: 'basic',
          exp: '6 months',
          description: 'Data processing, basic scripting, API integration',
        },
      ],
    },
    {
      type: 'tools',
      icon: 'git-branch',
      skills: [
        {
          tech: 'Git & GitHub',
          level: 'advanced',
          exp: '3+ years',
          description: 'Clean version control and reviews',
        },
        {
          tech: 'VS Code',
          level: 'advanced',
          exp: '4+ years',
          description: 'Efficient setup for debugging and faster development.',
        },
        {
          tech: 'Figma',
          level: 'intermediate',
          exp: '2+ years',
          description: 'Bridging design and code for consistent UI systems.',
        },
        {
          tech: 'Vercel',
          level: 'intermediate',
          exp: '2+ years',
          description: 'Fast, reliable app deployments with zero downtime.',
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        duration: 1,
      },
    },
  }

  const techItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <LandingSection>
      <h1 className="font-medium text-4xl text-title">
        Tech <span className="text-primary">Stack</span>
      </h1>
      <p>Deep expertise in modern technologies with real-world applications</p>
      <div className="flex flex-col gap-4 mt-8 lg:flex-row md:flex-wrap">
        {techStacks?.length > 0 &&
          techStacks?.map((stack) => (
            <Card
              className="bg-gray-500/5 px-6 py-8 flex flex-col lg:flex-1 lg:min-w-0 lg:basis-[calc(50%-0.5rem)]"
              key={stack.type}
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-background/80 text-primary flex items-center justify-center p-2 rounded-md">
                  {/* <CodeXml size={16} /> */}
                  <DynamicIcon name={stack.icon} size={16} />
                </div>
                <h2 className="text-title font-medium capitalize">
                  {stack.type}
                </h2>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="flex flex-col gap-4"
              >
                {stack?.skills?.length > 0 &&
                  stack?.skills?.map((tech) => (
                    <motion.div variants={techItemVariants} key={tech.tech}>
                      <Card className="bg-background text-title px-6 py-4">
                        <div className="flex justify-between flex-col xs:flex-row xs:items-center">
                          <div className="flex items-center gap-2">
                            <h4>{tech.tech}</h4>
                            <span
                              className={cn(
                                'text-xs capitalize py-0.5 px-2 rounded-md bg-gray-500/10',
                                tech.level === 'advanced' ? 'bg-primary' : '',
                                tech.level === 'intermediate'
                                  ? 'bg-secondary'
                                  : '',
                              )}
                            >
                              {tech.level}
                            </span>
                          </div>
                          <div className="flex text-xs items-center gap-2">
                            <Calendar size="12" />
                            <span>{tech.exp}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 mt-4">
                          <div>
                            <CheckCircle size={12} className="text-primary" />
                          </div>
                          <p className="text-sm">{tech.description} </p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </Card>
          ))}
      </div>
    </LandingSection>
  )
}
