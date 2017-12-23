import Vue			from 'vue'
import Router		from 'vue-router'
import indexes		from '@/router/indexes.js'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: '/style_guide'},
		{
			path: '/style_guide',
			//name: 'Style Guide',  This generates a warning, confusing vue as to what the default path should be
			component: indexes.style_guide,
			children: [
				{path: '',				name: 'Home',			component: indexes.home},
				{path: ':component',	name: 'Components',		component: indexes.components, props:true}
			]
		},
		{path: '/test',					name: 'Test',					component: indexes.test},		
	]
})
