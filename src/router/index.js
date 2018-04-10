import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicDemo1 from '@/components/BasicDemo1'
import BasicDemo2 from '@/components/BasicDemo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'BasicDemo1',
      component: BasicDemo1
    },
    {
      path: '/demo2',
      name: 'BasicDemo2test',
      component: BasicDemo2
    }
  ]
})
