import About from "../pages/about/about"
import Login from "../pages/login/login"
import Home  from '../pages/home/home'
const routes = [
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
  }
]

export default routes