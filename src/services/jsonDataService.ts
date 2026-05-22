// src/services/jsonDataService.ts
import type { IDataService } from './dataService'
import type { Tool, Category, Prompt, Tutorial } from '@/types'

// Dynamic imports to avoid build issues
let toolsData: Tool[] = []
let categoriesData: Category[] = []
let promptsData: Prompt[] = []
let tutorialsData: Tutorial[] = []

// Lazy load function
async function loadData() {
  if (toolsData.length === 0) {
    const [tools, categories, prompts, tutorials] = await Promise.all([
      import('@/data/tools.json').then(m => m.default),
      import('@/data/categories.json').then(m => m.default),
      import('@/data/prompts.json').then(m => m.default),
      import('@/data/tutorials.json').then(m => m.default),
    ])
    toolsData = tools
    categoriesData = categories
    promptsData = prompts
    tutorialsData = tutorials
  }
}

export class JSONDataService implements IDataService {
  // Tools
  async getTools(): Promise<Tool[]> {
    await loadData()
    return toolsData
  }
  
  async getToolById(id: string): Promise<Tool | undefined> {
    await loadData()
    return toolsData.find(tool => tool.id === id)
  }
  
  async getToolsByCategory(categoryId: string): Promise<Tool[]> {
    await loadData()
    return toolsData.filter(tool => tool.category === categoryId)
  }
  
  async searchTools(query: string): Promise<Tool[]> {
    await loadData()
    const lowerQuery = query.toLowerCase()
    return toolsData.filter(tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery)
    )
  }
  
  async getFeaturedTools(limit: number = 6): Promise<Tool[]> {
    await loadData()
    return toolsData.filter(tool => tool.featured).slice(0, limit)
  }
  
  // Categories
  async getCategories(): Promise<Category[]> {
    await loadData()
    return categoriesData
  }
  
  async getCategoryById(id: string): Promise<Category | undefined> {
    await loadData()
    return categoriesData.find(cat => cat.id === id)
  }
  
  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    await loadData()
    return categoriesData.find(cat => cat.slug === slug)
  }
  
  // Prompts
  async getPrompts(): Promise<Prompt[]> {
    await loadData()
    return promptsData
  }
  
  async getFeaturedPrompts(limit: number = 6): Promise<Prompt[]> {
    await loadData()
    return promptsData.filter(prompt => prompt.featured).slice(0, limit)
  }
  
  // Tutorials
  async getTutorials(): Promise<Tutorial[]> {
    await loadData()
    return tutorialsData
  }
  
  async getFeaturedTutorials(limit: number = 6): Promise<Tutorial[]> {
    await loadData()
    return tutorialsData.filter(tutorial => tutorial.featured).slice(0, limit)
  }
}