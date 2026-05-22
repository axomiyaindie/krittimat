// src/services/dataService.ts
import type { Tool, Category, Prompt, Tutorial } from '@/types'

export interface IDataService {
  // Tools
  getTools(): Promise<Tool[]>
  getToolById(id: string): Promise<Tool | undefined>
  getToolsByCategory(categoryId: string): Promise<Tool[]>
  searchTools(query: string): Promise<Tool[]>
  getFeaturedTools(limit?: number): Promise<Tool[]>
  
  // Categories
  getCategories(): Promise<Category[]>
  getCategoryById(id: string): Promise<Category | undefined>
  getCategoryBySlug(slug: string): Promise<Category | undefined>
  
  // Prompts
  getPrompts(): Promise<Prompt[]>
  getFeaturedPrompts(limit?: number): Promise<Prompt[]>
  
  // Tutorials
  getTutorials(): Promise<Tutorial[]>
  getFeaturedTutorials(limit?: number): Promise<Tutorial[]>
}