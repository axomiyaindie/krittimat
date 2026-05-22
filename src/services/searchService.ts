// src/services/searchService.ts
import { dataService } from './dataServiceFactory'
import type { Tool, Prompt, Tutorial } from '@/types'

export class SearchService {
  async searchAll(query: string) {
    const [tools, prompts, tutorials] = await Promise.all([
      dataService.searchTools(query),
      dataService.getPrompts(), // Add search method to interface
      dataService.getTutorials(),
    ])
    
    // Filter prompts and tutorials by search
    const filteredPrompts = prompts.filter((p: Prompt) => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase())
    )
    
    const filteredTutorials = tutorials.filter((t: Tutorial) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase())
    )
    
    return {
      tools: tools,
      prompts: filteredPrompts,
      tutorials: filteredTutorials,
      total: tools.length + filteredPrompts.length + filteredTutorials.length
    }
  }
  
  async quickSearch(query: string, limit: number = 5) {
    const results = await this.searchAll(query)
    return {
      tools: results.tools.slice(0, limit),
      prompts: results.prompts.slice(0, limit),
      tutorials: results.tutorials.slice(0, limit)
    }
  }
}

export const searchService = new SearchService()
