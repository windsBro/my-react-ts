// import React from 'react'
import About from "../pages/about/about"
import Loadable from 'react-loadable'
import Login from "../pages/login/login"
import Home  from '../pages/home/home'
import Loading from '../pages/loading'
import { RouteProps } from "react-router-dom"

// const Log  =React.lazy(()=> import('../pages/log'))
const Log = Loadable({
  loader: ()=> import('../pages/log'),
  loading: Loading
})

const routes:RouteProps[] = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }, {
    path: '/login',
    component: Login
  }, {
    path:'/log',
    component: Log
  }
]

export default routes