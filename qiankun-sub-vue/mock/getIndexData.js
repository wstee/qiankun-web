import { mock, Random } from 'mockjs'

export default {
  url: '/system/indexData',
  method: 'post',
  response: () => {
    return {
      code: 0,
      data: mock({
        totalNum: Random.integer(100, 10000),
        totalCost: Random.integer(100, 10000),
        // 年限分布
        yearsDistribution: [
          { name: '一年以内', value: Random.integer(100, 10000) },
          { name: '2-5年', value: Random.integer(100, 10000) },
          { name: '6-10年', value: Random.integer(100, 10000) },
          { name: '11-15年', value: Random.integer(100, 10000) },
          { name: '16-20年', value: Random.integer(100, 10000) },
          { name: '21年以上', value: Random.integer(100, 10000) }
        ],
        // 年度总体
        yearsTotal:  [
          { name: '2018', value: Random.integer(100, 10000) },
          { name: '2019', value: Random.integer(100, 10000) },
          { name: '2020', value: Random.integer(100, 10000) },
          { name: '2021', value: Random.integer(100, 10000) },
          { name: '2022', value: Random.integer(100, 10000) }
        ],
        // 厂家分布
        'factoryDistribution|20': [
          {
            name: '@cword(2,3)',
            value: Random.integer(100, 1000)
          }
        ],
        // 健康状态
        deviceHealthy: [
          { name: '0-60分', value: Random.integer(100, 10000) },
          { name: '60-70分', value: Random.integer(100, 10000) },
          { name: '70-80分', value: Random.integer(100, 10000) },
          { name: '80-90分', value: Random.integer(100, 10000) },
          { name: '90-100分', value: Random.integer(100, 10000) }
        ]
      })
    }
  }
}
