import React from 'react'
import { Outlet } from 'react-router-dom'
export default function layout() {
  const [test ] = React.useState('lalala')
  return (<div>
    {test}
    <Outlet />
  </div>)
}