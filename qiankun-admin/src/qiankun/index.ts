import { registerMicroApps } from 'qiankun'
import config from './config'

const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        async app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        async app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        async app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
}
