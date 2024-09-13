import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import React from 'react'

const Home = React.lazy(() => import('@/views/Home/Home'))
const Layout =  React.lazy(() => import('@/layout/Layout'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
], {
  basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-react18-vite' : ''
})
export default function RootRouter() {
  return (<RouterProvider router={router} />)
}