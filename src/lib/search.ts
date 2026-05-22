import Fuse from 'fuse.js'
import tools from '@/data/tools.json' // 🔄 Updated path alias
import prompts from '@/data/prompts.json' // 🔄 Updated path alias
import tutorials from '@/data/tutorials.json' // 🔄 Updated path alias
import { learnTopics } from '@/data/learnTopics'
import type { SearchItem, Tool, Prompt, Tutorial } from '@/types'

const toolItems = tools as Tool[]
const promptItems = prompts as Prompt[]
const tutorialItems = tutorials as Tutorial[]

function buildSearchItems(lang = 'en'): SearchItem[] {
  return [
    ...toolItems.map((tool) => ({
      ...tool,
      type: 'tool',
      title: tool.name,
      href: `/${lang}/tools/${tool.id}`
    }) satisfies SearchItem),
    ...promptItems.map((prompt) => ({
      ...prompt,
      type: 'prompt',
      description: prompt.use_case,
      href: `/${lang}/prompts/${prompt.id}`
    }) satisfies SearchItem),
    ...tutorialItems.map((tutorial) => ({
      ...tutorial,
      type: 'tutorial',
      href: `/${lang}/learnai/${tutorial.id}`
    }) satisfies SearchItem),
    ...learnTopics.map((topic) => ({
      ...topic,
      type: 'guide',
      href: `/${lang}/learnai/${topic.slug}`,
      tags: ['learn-ai', 'guide']
    }) satisfies SearchItem)
  ]
}

function createFuse(items: SearchItem[]) {
  return new Fuse(items, {
  keys: ['name', 'title', 'description', 'description_as', 'tags', 'category', 'company'],
  threshold: 0.3,
  includeScore: true,
  })
}

export function searchAll(query: string, lang = 'en'): SearchItem[] {
  if (!query || query.trim().length < 2) return []
  const items = buildSearchItems(lang)
  const fuse = createFuse(items)
  return fuse.search(query).map(r => r.item).slice(0, 8)
}

export function searchTools(query: string): Tool[] {
  if (!query) return toolItems
  const f = new Fuse(toolItems, { keys: ['name', 'description', 'tags', 'category'], threshold: 0.3 })
  return f.search(query).map(r => r.item)
}

export { toolItems as tools, promptItems as prompts, tutorialItems as tutorials }
