import AboutMe from '@/components/blocks/aboutMe'
import Hero from '@/components/blocks/hero'

export default function Home() {
  return (
    <div className="w-svw h-svh flex flex-col pt-[68px] items-center px-16 md:px-32 max-w-[1400px] mx-auto">
      <Hero />
      <AboutMe />
    </div>
  )
}
