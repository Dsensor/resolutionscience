import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/account',
      name: 'account-page',
      component: require('@/components/Account').default
    },
    {
      path: '/science',
      name: 'acc-page',
      component: require('@/components/Science').default
    },
    {
      path: '/datadevicesensor',
      name: 'data-page',
      component: require('@/components/DataDeviceSensor').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
