import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component:()=>import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "index",
        name: "首页",
        component: () => import('../components/index/index.vue')
      },
      {
        path: "course",
        name: "课程",
        component: () => import('../components/course/Course.vue')
      },
      {
        path: "advisory",
        name: "咨询",
        component: () => import('../components/advisory/Advisory.vue')
      },
      {
        path: "book",
        name: "图书",
        component: () => import('../components/book/book.vue')
      },
      {
        path: "my",
        name: "我的",
        component: () => import('../components/my/My.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
