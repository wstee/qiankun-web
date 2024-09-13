export interface Item {
  name: string
  value: number | string
}

export interface IndexData {
  // 改造设备总数量
  totalNum: number
  // 改造设备总费用
  totalCost: number
  // 年限分布
  yearsDistribution: Item[]
  // 年度总体
  yearsTotal: Item[]
  // 厂家分布
  factoryDistribution: Item[]
  // 健康状态
  deviceHealthy: Item[]
}