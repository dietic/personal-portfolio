import { IconName } from 'lucide-react/dynamic'

export interface Tech {
  type: string
  icon: IconName
  skills: Skill[]
}

interface Skill {
  tech: string
  level: Level
  exp: string
  description: string
}

export type Level =
  | 'advanced'
  | 'intermediate'
  | 'basic'
  | 'avanzado'
  | 'intermedio'
  | 'basico'
