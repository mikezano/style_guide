<template lang="pug">
	vuer_examples.example(:name="example" style="display:none")
</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples'
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
		console.log("in the mount");
		this.$store.commit('setExampleEl', this.$el);
	},
	computed: {
		...mapState(['isTransitioning', 'el']),
		...mapMutations(['setExampleEl'])
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
		vuer_examples
	}
}
</script>

<style lang="scss">
.example{
	div[class^='vuer__']{
		animation: fadeIn .5s ease-in-out forwards;
	}
}

@keyframes fadeIn {
	from{opacity:0; height:0%;}
	to{opacity:1; height:100%;}
}
</style>
