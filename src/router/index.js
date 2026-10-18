import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import QuestionView from '../views/QuestionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user' // 默认打开网页时，自动跳转到用户管理页面
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router