import Fuse from 'fuse.js'
import tools from '../data/tools.json'
import prompts from '../data/prompts.json'
import tutorials from '../data/tutorials.json'

const allItems = [
  ...tools.map(t => ({ ...t, type: 'tool', href: `/ai-tools/${t.id}` })),
  ...prompts.map(p => ({ ...p, type: 'prompt', href: `/prompts/${p.category}` })),
  ...tutorials.map(t => ({ ...t, type: 'tutorial', href: `/tutorials/${t.id}` })),
]

const fuse = new Fuse(allItems, {
  keys: ['name', 'title', 'description', 'tags', 'category'],
  threshold: 0.3,
  includeScore: true,
})

export function searchAll(query) {
  if (!query || query.trim().length < 2) return []
  return fuse.search(query).map(r => r.item).slice(0, 8)
}

export function searchTools(query) {
  if (!query) return tools
  const f = new Fuse(tools, { keys: ['name', 'description', 'tags', 'category'], threshold: 0.3 })
  return f.search(query).map(r => r.item)
}

export { tools, prompts, tutorials }