import { Code, MapPin } from 'lucide-react'
import { Card, CardContent } from '../../ui/card'
import Image from 'next/image'
import { TechStack } from './aboutme.interface'
import LandingSection from '@/components/custom/landingSection.component'
import { useTranslations } from 'next-intl'

export default function AboutMe() {
  const techStack: TechStack[] = [
    {
      id: 'react',
      label: 'React',
      alt: 'react-icon',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
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

  const t = useTranslations()
  const focusAreas = t.raw('about.story.focusAreas')
  return (
    <LandingSection>
      <h1 className="font-medium text-4xl text-title">
        {t.rich('about.title', {
          me: (chunk) => <span className="text-primary">{chunk}</span>,
        })}
      </h1>
      <p>{t('about.subtitle')}</p>
      <h2 className="text-xl my-8 font-medium text-title">
        {t('about.headline')}
      </h2>
      <p className="mb-4">{t('about.story.intro')}</p>
      <p>{t('about.story.focusIntro')}</p>
      <ol className="list-decimal list-inside mt-4 pl-4 text-title">
        {focusAreas.length > 0 &&
          focusAreas.map((area: string, idx: number) => (
            <li key={idx}>{area}</li>
          ))}
      </ol>
      <p className="mt-4">{t('about.story.outro')}</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mt-4">
        <Card className="flex items-center sm:flex-1">
          <CardContent className="flex items-center w-full py-4 gap-4">
            <div className="p-2 bg-primary/20 rounded-full text-primary">
              <MapPin height="20" width="20" />
            </div>
            <div>
              <p className="text-title capitalize">
                {t('common.location.title')}
              </p>
              <p className="text-primary/60 text-left">
                {t('common.location.place')}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex items-center sm:flex-1">
          <CardContent className="flex items-center w-full py-4 gap-4">
            <div className="p-2 bg-secondary/20 rounded-full text-secondary">
              <Code height="20" width="20" />
            </div>
            <div>
              <p className="text-title capitalize">
                {t('common.experience.title')}
              </p>
              <p className="text-secondary/60 text-left">
                {t('common.experience.time', { years: 5 })}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl my-8 font-medium text-title">
        {t('about.currentStack.title')}
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
        <h2 className="text-xl font-medium text-title text-center">
          {t('about.valueProposition.title')}
        </h2>
        <div className="flex flex-col gap-8 pt-6">
          <div className="text-center">
            <h4 className="text-3xl font-medium text-primary">5+</h4>
            <span className="text-gray-600 text-sm">
              {t('about.valueProposition.experienceSubtitle')}
            </span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-medium text-secondary">Frontend</h4>
            <span className="text-gray-600 text-sm">
              {t('about.valueProposition.focusSubtitle')}
            </span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-medium text-primary">UX/UI</h4>
            <span className="text-gray-600 text-sm">
              {t('about.valueProposition.extraSubtitle')}
            </span>
          </div>
        </div>
      </Card>
    </LandingSection>
  )
}
