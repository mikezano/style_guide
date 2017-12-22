<template lang="pug">
	.container

		h1.title_of_site STYLE GUIDE
		transition(name="fade" mode="out-in")
			router-view
</template>

<script>

import vuer from '@/components/vuer/vuer'
import drop_down from '@/components/drop_down'
import routes from '@/models/routes'

export default {
	name: 'style_guide_index',
	data () {
		return {
			msg: 'Zano',
			routes: routes
		}
	},
	components:{
		vuer,
		drop_down
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../../sass/fade';


.container{
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
	h1{
		width:600px;
		font-size:80px;
		margin:0;
		padding:0;
	}
}
</style>
