import AboutMe from '@/components/blocks/aboutMe/aboutme.component'
import ContactMe from '@/components/blocks/contactMe/contactme.component'
import Hero from '@/components/blocks/hero/hero.component'
import Projects from '@/components/blocks/projects/projects.component'
import TechStack from '@/components/blocks/techStack/techstack.component'

export default function Home() {
  return (
    <div className="w-svw flex flex-col pt-[68px] items-center px-8 sm:px-16 md:px-32 mx-auto max-w-[1200px]">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  )
}
