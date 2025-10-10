export interface NavItem {
  id: string
  label: string
  href: string
  active: boolean
}

export interface NavbarProps {
  theme: 'dark' | 'light'
}
