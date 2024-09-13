import './assets/style/index.scss'

import { createApp } from 'vue'
import type { App as Ap } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: Ap | null

const render = (container?: Element) => {
  app = createApp(App)
  app.use(router)
     .mount(container ? container.querySelector('#sub-app')! : '#sub-app')
  return app
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      const { container } = props
      app = render(container)
    },
    bootstrap(){},
    update(){},
    unmount() {
      app?.unmount()
      app = null
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : (app = render())
