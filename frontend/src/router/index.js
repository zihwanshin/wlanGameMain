import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/index/HelloWorld.vue'
import Page03header from '../components/page03/Page03header.vue'
import Page03input from '../components/page03/Page03input.vue'
import Page03Game from '../components/page03/Page03Game.vue'

Vue.use(VueRouter)

  const routes = [
    {
      name:'page03Home',
      path:'/page03',
      component:{
        default : Page03input,
        header : Page03header,
      }
  },
  {
      name:'page03Game',
      path:'/page03/game',
      components:{
        default : Page03Game,
        header : Page03header,
      },
      props : true //router객체로부터 param 전달 
  },
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
