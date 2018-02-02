<template lang="pug">
	div
		div {{route.params.component}}
		vuer(:name="single_component")
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
	},
	beforeMount(){
		console.log('before mount');
	},
	mounted(){
		console.log('hslkfa');
	},	
}
</script>