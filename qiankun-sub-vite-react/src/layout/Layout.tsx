import { useState } from 'react'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  const [test ] = useState('lalala')
  return (<div>
    {test}
    <Outlet />
  </div>)
}