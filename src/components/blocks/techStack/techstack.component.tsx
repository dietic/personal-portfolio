'use client'
import LandingSection from '@/components/custom/landingSection.component'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle } from 'lucide-react'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Level, Tech } from './techstack.interface'
import { useTranslations } from 'next-intl'
export default function TechStack() {
  const t = useTranslations()

  const techStacks: Tech[] = [
    {
      type: t('techStack.categories.frontend'),
      icon: 'code-xml',
      skills: [
        {
          tech: t('techStack.tech.react.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 3 }),
          description: t('techStack.tech.react.desc'),
        },
        {
          tech: t('techStack.tech.next.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 2 }),
          description: t('techStack.tech.next.desc'),
        },
        {
          tech: t('techStack.tech.angular.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 2 }),
          description: t('techStack.tech.angular.desc'),
        },
        {
          tech: t('techStack.tech.typescript.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 3 }),
          description: t('techStack.tech.typescript.desc'),
        },
        {
          tech: t('techStack.tech.javascript.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 4 }),
          description: t('techStack.tech.javascript.desc'),
        },
      ],
    },
    {
      type: t('techStack.categories.styling'),
      icon: 'palette',
      skills: [
        {
          tech: t('techStack.tech.tailwind.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 2 }),
          description: t('techStack.tech.tailwind.desc'),
        },
        {
          tech: t('techStack.tech.storybook.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 1 }),
          description: t('techStack.tech.storybook.desc'),
        },
        {
          tech: t('techStack.tech.css-scss.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 4 }),
          description: t('techStack.tech.css-scss.desc'),
        },
        {
          tech: t('techStack.tech.responsiveness.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 4 }),
          description: t('techStack.tech.responsiveness.desc'),
        },
      ],
    },
    {
      type: t('techStack.categories.backend'),
      icon: 'database',
      skills: [
        {
          tech: t('techStack.tech.postgres.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 1 }),
          description: t('techStack.tech.postgres.desc'),
        },
        {
          tech: t('techStack.tech.supabase.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 1 }),
          description: t('techStack.tech.supabase.desc'),
        },
        {
          tech: t('techStack.tech.node.label'),
          level: t('techStack.levels.basic') as Level,
          // was "6 months" → normalize to 1+ years
          exp: t('common.experience.time', { years: 1 }),
          description: t('techStack.tech.node.desc'),
        },
        {
          tech: t('techStack.tech.python.label'),
          level: t('techStack.levels.basic') as Level,
          // was "6 months" → normalize to 1+ years
          exp: t('common.experience.time', { years: 1 }),
          description: t('techStack.tech.python.desc'),
        },
      ],
    },
    {
      type: t('techStack.categories.tools'),
      icon: 'git-branch',
      skills: [
        {
          tech: t('techStack.tech.git.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 3 }),
          description: t('techStack.tech.git.desc'),
        },
        {
          tech: t('techStack.tech.vscode.label'),
          level: t('techStack.levels.advanced') as Level,
          exp: t('common.experience.time', { years: 4 }),
          description: t('techStack.tech.vscode.desc'),
        },
        {
          tech: t('techStack.tech.figma.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 2 }),
          description: t('techStack.tech.figma.desc'),
        },
        {
          tech: t('techStack.tech.vercel.label'),
          level: t('techStack.levels.intermediate') as Level,
          exp: t('common.experience.time', { years: 2 }),
          description: t('techStack.tech.vercel.desc'),
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
        {t.rich('techStack.title', {
          stack: (chunk) => <span className="text-primary">{chunk}</span>,
        })}
      </h1>
      <p>{t('techStack.subtitle')}</p>
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
                                'text-white text-xs capitalize py-0.5 px-2 rounded-md bg-gray-800',
                                tech.level === 'advanced' ||
                                  tech.level === 'avanzado'
                                  ? 'bg-primary'
                                  : '',
                                tech.level === 'intermediate' ||
                                  tech.level === 'intermedio'
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
