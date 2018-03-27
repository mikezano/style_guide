<template lang="pug">
	div
		h1.title {{$route.params.components}}
		vuer_transition
		//transition(name="fade" v-if="$route.params.single_component != null" mode="in-out")
			router-view
		transition(name="fade" v-if="$route.params.single_component == null" mode="out-in")
			transition-group( name="list" tag="div")
				.list-item(v-for="item in currentSet", :key="item")
					vuer_alt(:name="item")
</template>

<script>
import {mapGetters} from 'vuex'
import vuer_alt from '@/components/vuer/vuer_alt'
import vuer_transition from '@/components/vuer/vuer_transition'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'components',
	props: ['components'],
	data () {
		return {
			hash: [],
			currentSet: null,
			nextRoute: null
		}
	},
	beforeMount(){
		this.buildRegistry();
	},
	mounted(){
		this.getHtmlSingleFiles();
		this.currentSet = this.hash[this.components];
	},	
	computed: {
		...mapGetters(['getHtmlSingleFiles'])
	},
	methods: {
		elChanged(newEl, oldEl){
			console.log("El Changed 2", newEl, oldEl);
		},
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
	watch: {
		'$route': 'routeChanged',
	},
	components: {
		vuer_alt,
		vuer_transition
	}
}
</script>

<style lang="scss" scoped>
@import '../../sass/fade';

.title{
	text-transform:uppercase;
	font-weight:bold;
}

.list-enter-active{ transition: all .5s; }
.list-enter{ opacity: 0; }
.list-enter{ transform: translateX(-30px); }
.list-enter-to{ opacity:1; }
.list-leave{ display:none; }

</style>