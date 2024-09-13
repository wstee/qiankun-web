import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
const About = React.lazy(() => import('@/views/About/About'));

const Auth = function({children}) {
  window.history.pushState(null, '', '')
  return <>{children}</>
}

const routes = [
	{
		path: '/',
    children: [
      {
        path: '',
        element: <Auth><Home /></Auth>
      },
      {
        path: 'about',
        element: <Auth><About /></Auth>
      }

    ]
	},
]

export default routes;