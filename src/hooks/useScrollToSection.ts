import { useCallback } from 'react'

export function useScrollToSection() {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return scrollToSection
}
