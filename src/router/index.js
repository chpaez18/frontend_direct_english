import { createRouter, createWebHistory } from 'vue-router'
/* Productos */
import productoCrear from '../components/productos/Crear.vue'
import productoEditar from '../components/productos/Editar.vue'
import productoListar from '../components/productos/Listar.vue'

/* Usuarios */
import usuarioCrear from '../components/usuarios/Crear.vue'
import usuarioEditar from '../components/usuarios/Editar.vue'
import usuarioListar from '../components/usuarios/Listar.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: productoListar
  },

  /* Productos */
  {
    path: '/productos/crear',
    name: 'productoCrear',
    component: productoCrear
  },
  {
    path: '/productos/editar/:id',
    name: 'productoEditar',
    component: productoEditar
  },
  {
    path: '/productos/listar',
    name: 'productoListar',
    component: productoListar
  },

  /* Usuarios */
  {
    path: '/usuarios/crear',
    name: 'Crear',
    component: usuarioCrear
  },
  {
    path: '/usuarios/editar/:id',
    name: 'Editar',
    component: usuarioEditar
  },
  {
    path: '/usuarios/listar',
    name: 'Listar',
    component: usuarioListar
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
