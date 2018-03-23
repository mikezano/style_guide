<template lang="pug">
	div
		div Fake
		vuer_examples(:name="example")
</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples'
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
		alert('boom');
	},
	components: {
		vuer_examples
	}
}
</script>