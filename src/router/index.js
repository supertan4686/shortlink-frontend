import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Gen from '@/components/Gen'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/',
      name: 'Gen',
      component: Gen
    },
    {
      path: '/:shortlink',
      name: 'Main',
      component: Main
    }
  ],
  mode: 'history'
})
