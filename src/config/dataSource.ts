// src/config/dataSource.ts
export const DATA_SOURCE = {
  type: (process.env.DATA_SOURCE as 'json' | 'database') || 'json',
  jsonPath: '@/data',
  database: {
    url: process.env.DATABASE_URL,
    provider: process.env.DATABASE_PROVIDER || 'postgresql'
  }
}