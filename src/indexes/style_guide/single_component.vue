<template lang="pug">
	vuer_examples.example(:name="example" style="display:none;")
</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples'
import { mapState } from 'vuex'
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
	computed: {
		...mapState(['isTransitioning'])
	},
	watch:{
		isTransitioning(newVal, oldVal){
			console.log('isTransitioning', newVal, oldVal);
			if(newVal == false)
				this.$el.style = "display:block";
		}
	},
	components: {
		vuer_examples
	}
}
</script>