// src/repositories/toolsRepository.ts
import { dataService } from '@/services/dataServiceFactory'
import type { Tool } from '@/types'

export const toolsRepository = {
  getAll: (): Promise<Tool[]> => dataService.getTools(),
  
  getById: (id: string): Promise<Tool | undefined> => 
    dataService.getToolById(id),
  
  getByCategory: (categoryId: string): Promise<Tool[]> => 
    dataService.getToolsByCategory(categoryId),
  
  search: (query: string): Promise<Tool[]> => 
    dataService.searchTools(query),
  
  getFeatured: (limit?: number): Promise<Tool[]> => 
    dataService.getFeaturedTools(limit),
}
