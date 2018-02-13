import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blurbs from '@/components/Blurbs'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
    	path: '/blurbs',
    	name: 'Blurbs',
    	component: Blurbs
    }
  ]
})
