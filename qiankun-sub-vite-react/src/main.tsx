import React from 'react'
import { Root, createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root: Root | null
function render(container?: Element) {
  const root = createRoot(container ? container.querySelector('#app-react18-vite')! : document.querySelector('#app-react18-vite')!)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  return root
}

function initQianKun() {
  renderWithQiankun({
    mount(props: any) {
      const { container } = props
      root = render(container)
    },
    bootstrap(){},
    update(){},
    unmount() {
      root?.unmount()
      root = null
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : (root = render())