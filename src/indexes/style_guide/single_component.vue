<template lang="pug">
	vuer_alt(:name="example" :class="{'dont-show' : single_component != null}")
</template>

<script>
import vuer_alt from '@/components/vuer/vuer_alt'
import { mapState, mapMutations } from 'vuex'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
//const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'single_component',
	props: ['single_component'],
	data () {
		return {
			vuer_fader: null,
			example: this.single_component + "_examples"
		}
	},
	mounted(){
		console.log("single_component:mounted", this.$el);
		this.$store.commit('setToEl', this.$el);

		this.vuerFader = this.$el.querySelectorAll(".vuer__fader")[0];

		if(this.$route.params.single_component != null && this.isTransitioning == false){
			console.log("redirect from: ",this.$route.redirectedFrom);
			this.reveal();
		}

	},
	destroyed(){
		this.$el.classList.add('dont-show');
		this.vuerFader.classList.add('dont-show');
	},
	computed: {
		...mapState(['isTransitioning']),
		...mapMutations(['setToEl'])
	},
	methods:{
		routeChanged(newRoute, oldRoute){
			console.log("Single: ", newRoute, oldRoute);
		},
		reveal(){
			this.$el.classList.remove('dont-show');
			this.vuerFader.classList.add('fade-in');
		}
	},
	watch:{
		isTransitioning(newVal, oldVal){

			if(newVal == false){
				this.reveal();
			}
		}
	},
	components: {
		vuer_alt
	}
}
</script>

<style lang="scss" scoped>

.dont-show{
	opacity:0;
}
</style>
<style lang="scss">

.vuer__fader{
	&.fade-in{
		animation: fadeIn 2.5s cubic-bezier(.32,1,.48,.98) forwards;
	}
}
@keyframes fadeIn {
	from{opacity:0; height:0%;}
	to{opacity:1; height:100%;}
}
</style>

