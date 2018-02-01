<template lang="pug">
	div
		div {{$route.params.component}}
		vuer(:name="item")
</template>

<script>
import vuer from '@/components/vuer/vuer'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'single_component',
	props: ['item'],
	components: {
		vuer
	},
	mounted(){
		console.log('hslkfa');
	},	
}
</script>