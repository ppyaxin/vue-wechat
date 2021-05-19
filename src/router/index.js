import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Message from '@/components/Message'
import Texts from '@/components/Texts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/',
      name: 'Message',
      component: Message
    },
    {
      path: '/',
      name: 'Texts',
      component: Texts
    }
  ]
})
