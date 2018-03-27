<template lang="pug">
	vuer_examples.example(:name="example" style="opacity:0;")
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
		...mapState(['isTransitioning']),
		...mapMutations(['setExampleEl'])
	},
	watch:{
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