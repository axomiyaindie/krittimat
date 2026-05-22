// src/services/dataServiceFactory.ts
import { DATA_SOURCE } from '@/config/dataSource'
import { JSONDataService } from './jsonDataService'
import type { IDataService } from './dataService'

let dataServiceInstance: IDataService | null = null

export function getDataService(): IDataService {
  if (!dataServiceInstance) {
    switch (DATA_SOURCE.type) {
      case 'database':
        // When you add database:
        // dataServiceInstance = new DatabaseDataService()
        throw new Error('Database service not implemented yet')
      case 'json':
      default:
        dataServiceInstance = new JSONDataService()
    }
  }
  return dataServiceInstance
}

// Export singleton instance
export const dataService = getDataService()