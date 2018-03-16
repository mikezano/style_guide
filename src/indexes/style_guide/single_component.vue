<template lang="pug">
	div
		| {{single_component}}

		vuer(name="circle_zoom_examples")
</template>

<script>
import vuer from '@/components/vuer/vuer'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'one_component',
	props: ['single_component'],
	components: {
		vuer
	}
}
</script>