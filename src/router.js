

import Login from './components/Login'
import Citizen from './components/Citizen'
import Landing from './components/Landing'
import Status from './components/Status'
import Queue from './components/Queue'
import Loading from './components/Login'
import Done from './components/Done'
import Thanks from './components/Thanks'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      { path: '/', name:'landing',component: Landing },
      { path: '/login', name:'login', component: Login },   
      { path: '/status', name:'status', component: Status },
      { path: '/citizen', name:'citizen', component: Citizen},
      { path: '/loading', name:'loading', component: Loading},
      { path: '/done', name:'done', component: Done},
      { path: '/thanks', name:'thanks', component: Thanks},
      { path: '/queue', name:'queue', component: Queue}
    ]
  })