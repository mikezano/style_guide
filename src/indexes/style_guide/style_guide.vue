<template lang="pug">
	.container
		transition(name="fade" mode="out-in")
			router-view
</template>

<script>
import routes from '@/models/routes'

export default {
	name: 'style_guide_index',
	data () {
		return {
			msg: 'Zano',
			routes: routes
		}
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

</style>
