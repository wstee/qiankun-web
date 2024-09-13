import './assets/style/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { registerApps } from '@/qiankun'

registerApps()

const app = createApp(App)

app.use(router)

app.mount('#app')
