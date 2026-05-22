export type { Tool } from './tool'
export type { Category } from './category'
export type { Tutorial, SearchResults, SearchItem } from './api'

export interface Prompt {
  id: string
  category: string
  title: string
  title_as?: string
  prompt: string
  tags: string[]
  use_case: string
  description?: string
  description_as?: string
  featured?: boolean
}
