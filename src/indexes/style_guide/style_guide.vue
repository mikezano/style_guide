<template lang="pug">
	.container

		.title_of_site
			//span.dot .
			//span.ads AD&S
			span.left_brace {
			span.style STYLE
			span.colon :
			span.g G
			span.ui UI
			span.de DE
			//span.semi-colon ;
			span.right_brace }

		//.title_of_site
			span.dot .
			span.style STYLE
			span.left_brace {
			span.g G
			span.ui UI
			span.de DE
			span.right_brace }
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
@import '../../sass/colors';

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
.title_of_site{
	font-size:60px;
	font-weight:bold;
	color:$vue_green_dark;
	.dot, .left_brace, .right_brace,
	.colon, .semi-colon{
		color:#aaa;
	}
	.ui{
		color:$vue_green;
		font-size:70px;	
	}
	.style{color:$vue_green_dark;}
	
}
</style>
