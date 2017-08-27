import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import environment from '@/components/environment/environment'
import animated_background from '@/components/animated_background'
import standard_animations from '@/components/standard_animations'
import sara from '@/components/sara'
import gsap from '@/components/gsap'
import gsap_auto from '@/components/gsap_auto'
import guess_number from '@/components/guess_number'
import animations from '@/components/animations'
import fade from '@/components/animations/fade'
import zoom from '@/components/animations/zoom'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',               name: 'Hello',                  component: Hello},
    {path: '/environment',    name: 'Environment',            component: environment},
    {path: '/background',     name: 'Animated Background',    component: animated_background},
    {path: '/animations',     name: 'Vue Animations',         component: standard_animations},
    {path: '/gsap',           name: 'Green Sock',             component: gsap},
    {path: '/gsap_auto',      name: 'Green Sock Auto',        component: gsap_auto},
    {path: '/sara',           name: 'Sara',                   component: sara},
    {path: '/guess_number',   name: 'Guess Number',           component: guess_number},
    {
      path: '/animationss',     
      name: 'Animations',             
      component: animations,
      children: [
        {path: 'fade',   name: 'Animation Fade', component: fade},
        {path: 'zoom',   name: 'Animation Zoom', component: zoom}
      ]
    }
  ]
})
