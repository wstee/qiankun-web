import React, { memo, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Home = memo(() => {
  const title = 'qiankun-sub-react'

  // 网络请求的代码
  useEffect(() => {
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <NavLink to="/about">to about</NavLink>
    </div>
  )
})

export default Home
