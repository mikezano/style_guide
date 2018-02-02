<template lang="pug">
	div
		h1.title {{$route.params.components}}

		transition-group.simple_container( v-if="$route.params.single_component == null" name="list" tag="div" mode="out-in")
			.list-item(v-for="item in currentSet", :key="item")
				vuer_simple(:name="item")

		//transition-group.container(name="list" tag="div" v-on:after-leave="afterLeave")
			.list-item(v-for="item in currentSet", :key="item")
				vuer(:name="item")
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

.title{
	text-transform:capitalize;
}
.simple_container{
	column-count: 2;
	column-gap:1rem;
	//column-width:400px;
	width:800px;

	.flex-item{
		border:1px solid gray;
		background-color:  hsla(0, 0%, 92%, .5);
		border-radius:4px;
		//width:300px;
		//height:300px;
		margin:10px;
	}
}

.list-item {
  //display: inline-block;
}
.list-enter-active, .list-leave-active {
  transition: all .3s;
}
.list-leave-active{
	position:absolute;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
 
}
.list-enter{
	transform: translateX(-30px);
}
.list-leave-to{
	transform: translateX(30px);
}
.list-move{
	transition: transform 1s;
}
.list-enter-to, .list-leave{
	opacity:1;
}
.container{
	display:flex;
	flex-direction:column;
	align-items: center;
}
</style>