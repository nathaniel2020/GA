import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/pages/classify/Classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Classify',
      component: Classify
    }
  ]
})
