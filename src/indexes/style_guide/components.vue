<template lang="pug">
	div
		h1.title {{$route.params.components}}
		transition(name="fade" v-if="$route.params.single_component == null" mode="out-in")
			transition-group.container( name="list" tag="div")
				.list-item(v-for="item in currentSet", :key="item")
					vuer_simple(:name="item")
		transition(name="fade" v-if="$route.params.single_component != null" mode="out-in")
			router-view
</template>

<script>
import vuer from '@/components/vuer/vuer'
import vuer_simple from '@/components/vuer/vuer_simple'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'index_cards',
	props: ['components'],
	data () {
		return {
			hash: [],
			currentSet: null,
			nextRoute: null,
		}
	},
	beforeMount(){
		this.buildRegistry();
	},
	mounted(){
		this.currentSet = this.hash[this.components];
	},
	methods: {
		routeChanged(route){
			this.currentSet = this.hash[route.params.components];
		},
		buildRegistry(){
			//Loading file names from a folder
			files.keys().forEach((key) => {
				let path = (key.replace(/(\.\/|\.vue)/g, ''));
				let folder = path.substr(0, path.indexOf('/'));
				let file = path.substr(path.indexOf('/')+1, path.length);

				if(!this.hash[folder])
					this.hash[folder] = [];
				this.hash[folder].push(file);
			});
		}
	},
	watch :{
		'$route': 'routeChanged'
	},
	components: {
		vuer,
		vuer_simple
	}
}
</script>

<style lang="scss" scoped>
@import '../../sass/fade';
.title{
	text-transform:capitalize;
}
.container{
	column-count: 2;
	column-gap:1rem;
	//column-width:400px;
	width:800px;
}

.list-enter-active{ transition: all .5s; }
.list-enter{ opacity: 0; }
.list-enter{ transform: translateX(-30px); }
.list-enter-to{ opacity:1; }
.list-leave{ display:none; }

</style>