export interface Tool {
  id: string
  name: string
  company: string
  description: string
  description_as?: string
  category: string
  tags: string[]
  pricing: string
  website: string
  featured?: boolean
  trending?: boolean
}
