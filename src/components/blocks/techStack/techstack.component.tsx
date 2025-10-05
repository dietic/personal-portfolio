'use client'
import LandingSection from '@/components/custom/landingSection.component'
import { Card } from '@/components/ui/card'
import { Calendar, CheckCircle } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Tech } from './techstack.interface'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
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
          description: 'SSR, SSG, API routes, app router architecture',
        },
        {
          tech: 'Angular',
          level: 'intermediate',
          exp: '2+ years',
          description: 'Component architecture, services, reactive forms',
        },
        {
          tech: 'TypeScript',
          level: 'advanced',
          exp: '3+ years',
          description: 'Type safety, interfaces, generics, advanced patterns',
        },
        {
          tech: 'JavaScript',
          level: 'advanced',
          exp: '4+ years',
          description: 'ES6+, async/await, DOM manipulation, modern APIs',
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
          description:
            'Custom configurations, component libraries, responsive design',
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
            'Animations, grid/flexbox, custom properties, BEM methodology',
        },
        {
          tech: 'Responsiveness',
          level: 'advanced',
          exp: '4+ years',
          description: 'Mobile-first approach, cross-browser compatibility',
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
          description:
            'Complex queries, database design, performance optimization',
        },
        {
          tech: 'Supabase',
          level: 'intermediate',
          exp: '1+ year',
          description: 'Authentication, real-time subscriptions, RLS policies',
        },
        {
          tech: 'Node.js',
          level: 'basic',
          exp: '6 months',
          description: 'REST APIs, middleware, basic server architecture',
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
          description: 'Branching strategies, code reviews, CI/CD workflows',
        },
        {
          tech: 'VS Code',
          level: 'advanced',
          exp: '4+ years',
          description: 'Extensions, debugging, workspace optimization',
        },
        {
          tech: 'Figma',
          level: 'intermediate',
          exp: '2+ years',
          description: 'Design-to-code workflow, component systems',
        },
        {
          tech: 'Vercel',
          level: 'intermediate',
          exp: '2+ years',
          description: 'Deployment optimization, environment management',
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
      <h1 className="font-medium text-4xl text-white">
        Tech <span className="text-primary">Stack</span>
      </h1>
      <p>Deep expertise in modern technologies with real-world applications</p>
      <div className="flex flex-col gap-4 mt-8">
        {techStacks?.length > 0 &&
          techStacks?.map((stack) => (
            <Card
              className="bg-gray-500/5 px-6 py-8 flex flex-col gap-4"
              key={stack.type}
            >
              <div className="flex gap-4 items-center">
                <div className="bg-background/80 text-primary flex items-center justify-center p-2 rounded-md">
                  {/* <CodeXml size={16} /> */}
                  <DynamicIcon name={stack.icon} size={16} />
                </div>
                <h2 className="text-white font-medium capitalize">
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
                      <Card className="bg-background text-white px-6 py-4">
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
