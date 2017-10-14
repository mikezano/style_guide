import Vue				from 'vue'
import Router			from 'vue-router'
import Hello			from '@/components/Hello'
import environment		from '@/components/environment/environment'
import animated_background from '@/components/animated_background'
import gsap				from '@/components/gsap'
import gsap_auto		from '@/components/gsap_auto'
import guess_number		from '@/components/guess_number'
import animations		from '@/components/animations'
import examples_grid	from '@/components/animations/examples_grid'
import simple_examples	from '@/components/animations/simple_examples'
import hooks_examples	from '@/components/animations/hooks_examples'
import in_out_examples	from '@/components/animations/in_out_examples'
import fade				from '@/components/animations/fade'
import fade_detailed	from '@/components/animations/fade_detailed'
import timeline			from '@/components/animations/timeline'
import zoom				from '@/components/animations/zoom'
import template			from '@/components/animations/template'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/',					name: 'Hello',					component: Hello},
		{path: '/environment',		name: 'Environment',			component: environment},
		{path: '/background',		name: 'Animated Background',	component: animated_background},
		{path: '/gsap',				name: 'Green Sock',				component: gsap},
		{path: '/gsap_auto',		name: 'Green Sock Auto',		component: gsap_auto},
		{path: '/guess_number',		name: 'Guess Number',			component: guess_number},
		{path: '/animations/',
			component: animations,
			children: [
				{path: 'template',			name: 'Animation Template',			component: template},
				{path: 'fade',				name: 'Animation Fade',				component: fade},
				{path: 'fade_detailed',		name: 'Animation Fade Detailed',	component: fade_detailed},
				{path: 'timeline',			name: 'Animation Timeline',			component: timeline},
				{path: 'zoom',				name: 'Animation Zoom',				component: zoom},
				{path: 'examples_grid',		name: 'Examples Grid',				component: examples_grid},
				{path: 'simple_examples',	name: 'Samples Grid',				component: simple_examples},
				{path: 'in_out_examples',	name: 'In & Outs',					component: in_out_examples},
				{path: 'hooks_examples',	name: 'Hooks',						component: hooks_examples}
			]
		}
	]
})