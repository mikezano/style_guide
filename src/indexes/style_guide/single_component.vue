<template lang="pug">
	vuer_examples(:name="example")
</template>

<script>
import vuer from '@/components/vuer/vuer'
import vuer_alt from '@/components/vuer/vuer_alt'
import vuer_alt_simple from '@/components/vuer/vuer_alt_simple'
import vuer_examples from '@/components/vuer/vuer_examples'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'one_component',
	props: ['single_component'],
	data () {
		return {
			example: this.single_component + "_examples"
		}
	},
	components: {
		vuer,
		vuer_alt,
		vuer_alt_simple,
		vuer_examples
	}
}
</script>