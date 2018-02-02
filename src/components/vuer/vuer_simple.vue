<template lang="pug">
	.ex
		.ex__header

			| {{name.replace('_',' ')}}
		.ex__links
			router-link(:to="route" ) 
				icon(name="code" scale="2")
		.ex__output
			component(:is="component")
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'vuer_simple',
	props: ['name'],
	watch: {
		name: function(newVal, oldVal){
			this.getSources();
		}
	},
	data () {
		return {
			component: null,
			route: ""
		}
	},
	mounted(){
		this.getSources();
		this.route = 
			`/style_guide/${this.$route.params.components}/${this.name}`;
	},
	computed: {
		...mapGetters(['getComponent'])
	},
	methods: {
		getSources(){
			this.component = this.getComponent(this.name);
		}
	}
}
</script>

<style lang="scss" scoped>

@import '../../sass/global.scss';



.ex{
	border:1px solid darken($vue_green, 10%);
	position: relative;
	background-color:  hsla(0, 0%, 92%, .8);
	width:100%;
	box-shadow:2px 2px 4px #ccc;
	display:inline-block;
	margin-bottom:20px;
	
	&__header{
		text-align: center;
		color: $vue_green;
		font-size:20px;
		font-weight:bold;
		text-transform: capitalize;
		padding:10px;
		margin:0 10px;
		border-bottom: 1px solid $vue_green;
	}

	&__links{
		margin-top:-8px;
		position:absolute;
		right:30px;
		top:0;
		margin-top:10px;
		a {color:$vue_green;}
	}
	&__output{
		display:flex;
		align-items: center;
		justify-content: center;
		padding:20px;
	}
}
</style>
