import AboutMe from '@/components/blocks/aboutMe/aboutme.component'
import Hero from '@/components/blocks/hero/hero.component'
import TechStack from '@/components/blocks/techStack/techstack.component'

export default function Home() {
  return (
    <div className="w-svw h-svh flex flex-col pt-[68px] items-center px-8 sm:px-16 md:px-32 max-w-[1400px] mx-auto">
      <Hero />
      <AboutMe />
      <TechStack />
    </div>
  )
}
