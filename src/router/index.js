import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
   
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>import('@/views/ContactView.vue'),
    props: () => {
      return{
        telefono: '56-9345 3543',
        direccion: 'Los alerces #1430, Providencia',
        mail: 'atencion@suricatatienda.cl'
      }
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductView.vue'),
    props: () => {
      return{
      titulo: 'Desayunos',
      descripcion: 'Contamos con desayunos nutritivos, ricos y deliciosos',
      precio: 3000,
      cantidad: 'Para dos personas',
      }
      
    },
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //fijar clases de estilo de enlaces de router
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
})

export default router
