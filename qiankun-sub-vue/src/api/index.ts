import axios from '@/utils/http/index'
import type {
  IndexData,
} from './index.d'

/**
 * 轮次监视
 * @param region
 * @returns
 */
export function getIndexData (time: string, region?: string): Promise<IndexData> {
  return axios.post('/system/indexData', { region, time })
}