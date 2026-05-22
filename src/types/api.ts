import type { Prompt } from './index'
import type { Tool } from './tool'

export interface Tutorial {
  id: string
  title: string
  title_as?: string
  description: string
  description_as?: string
  duration: string
  level: string
  tools: string[]
  steps: number
  thumbnail: string
  featured?: boolean
}

export interface SearchResults {
  tools: Tool[]
  prompts: Prompt[]
  tutorials: Tutorial[]
  total: number
}

export interface SearchItem {
  id?: string
  slug?: string
  type: 'tool' | 'prompt' | 'tutorial' | 'guide'
  href: string
  name?: string
  name_as?: string
  title?: string
  title_as?: string
  description?: string
  description_as?: string
  category?: string
  company?: string
  use_case?: string
  tags?: string[]
}
