import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login";
import Registration from "../views/Registration";
import Users from "../views/Users";
import Diagram from "../views/Diagram";

const routes = [
  {
    path: '/users',
    name: 'users',
    component: Users,
    props: true,
  },
  {
    path: '/diagram',
    name: 'diagram',
    component: Diagram,
    props: true,
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
