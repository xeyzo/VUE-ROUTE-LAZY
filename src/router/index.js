import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import (/*webpackChunkName: "post"*/ '../views/Posts.view'),    
  },
  {
    path: '/posts/:id',
    component: () => import (/*webpackChunkName: "post-detail"*/ '../components/Posts/DetailPost')
  },
  {
    path: '/albums',
    component: () => import (/*webpackChunkName: "album"*/ '../views/Albums.view')
  },
  {
    path: '/albums/:id',
    component: () => import (/*webpackChunkName: "album-detail"*/ '../components/Albums/DetailAlbum')
  },
  {
    path: '/Photos',
    component: () => import (/*webpackChunkName: "photo"*/ '../views/Photos.view')
  },
  {
    path: '/Photos/:id',
    component: () => import (/*webpackChunkName: "photo-detail"*/ '../components/Photos/DetailPhoto')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router