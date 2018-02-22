<template lang="pug">
	div
		//- .ex
		//- 	.ex__header

		//- 		| {{name.replace('_',' ')}}
		//- 	.ex__links
		//- 		router-link(:to="route" ) 
		//- 			icon(name="code" scale="2")
		//- 	.ex__output
		//- 		component(:is="component")

		.card.my-5
			.card-header
				| {{name.replace('_',' ')}}
			.card-block.p-5
				.btn-circle
					router-link(:to="route" ) 
						icon(name="code" scale="2")
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

.card-header{
	text-transform: capitalize;
}

.btn-circle{
	width: 40px;
	height: 40px;
	border-radius:20px;
	background-color:--gray;
	position:absolute;
	top:10px;
	right:10px;
}

.ex{
	border:1px solid darken($vue_green, 10%);
	border-radius:3px;
	position: relative;
	background-color:  hsla(0, 0%, 92%, .8);
	width:100%;
	//box-shadow:2px 2px 4px #ccc;
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
		border-bottom: 1px dashed darken($vue_green, 10%);
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
		padding:40px;
	}
}
</style>
