import Vue			from 'vue'
import Router		from 'vue-router'
import style_guide	from '@/router/style_guide.js'
import indexes		from '@/router/indexes.js'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/',					name: 'Main',					component: indexes.main},
		{path: '/test',					name: 'Test',					component: indexes.test},
		{
			path: '/style_guide',
			//name: 'Style Guide',  This generates a warning, confusing vue as to what the default path should be
			component: indexes.style_guide,
			children: [
				{path: '',				name: 'Home',			component: style_guide.home},
				{path: ':component',	name: 'Components',		component: style_guide.components, props:true}
			]
		}
	]
})
