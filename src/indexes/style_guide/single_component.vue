<template lang="pug">
	vuer_alt.example(:name="example" style="opacity:0;")
</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples'
import vuer_alt from '@/components/vuer/vuer_alt'
import { mapState, mapMutations } from 'vuex'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
//const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'one_component',
	props: ['single_component'],
	data () {
		return {
			example: this.single_component + "_examples"
		}
	},
	beforeMount(){
	},
	mounted(){
		console.log("single_component:mounted", this.$el);
		this.$store.commit('setToEl', this.$el);

	},
	computed: {
		...mapState(['isTransitioning', 'el']),
		...mapMutations(['setToEl'])
	},
	watch:{
		el(newVal, oldVal){

		},
		isTransitioning(newVal, oldVal){
			if(newVal == false)
				this.$el.style = "display:block";
		}
	},
	components: {
		vuer_examples,
		vuer_alt
	}
}
</script>

<style lang="scss">
.example{
	div[class^='vuer__']{
		animation: fadeIn .5s ease-in-out 2s forwards;
	}
}



@keyframes fadeIn {
	from{opacity:0; height:0%;}
	to{opacity:1; height:100%;}
}
</style>
