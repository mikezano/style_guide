<template lang="pug">
	#app
		.navicon(@click="toggleSideMenu")
			icon(name="bars" scale="2")
		transition(name="slide-menu")
			side_menu(
				v-if="isShowingSideMenu" 
				v-on:closeMenu="toggleSideMenu")
		
		transition(name="fade" mode="out-in")
			router-view
</template>

<script>

import 'vue-awesome/icons/bars'
import icon from 'vue-awesome/components/Icon'
import side_menu from './components/side_menu'

export default {
	name: 'app',
		data () {
			return {isShowingSideMenu: false}
	},
	components:{
		side_menu,
		icon
	},
	methods: {
		toggleSideMenu(){
			this.isShowingSideMenu = !this.isShowingSideMenu;

		if(this.isShowingSideMenu == true){
			document
				.getElementById("app")
				//need the capture:true to prevent immediate fire of close
				.addEventListener("click", this.closeSideMenu, {capture:true});
		}
	},
	closeSideMenu(){
		this.isShowingSideMenu = false;
		document
			.getElementById("app")
			.removeEventListener("click", this.closeSideMenu);
		}
	},
	mounted () {
	}
}
</script>

<style lang="scss" scoped>

@import './sass/fade';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 20px;
}
.navicon{
	position:absolute;
	left:30px;
	top:30px;
	img{
		width:30px;
		height:30px;
	}
}
.slide-menu-enter-active, .slide-menu-leave-active{
	transition: all 0.5s ease-out;
}
.slide-menu-enter, .slide-menu-leave-to{
	transform: translateX(-200px);
}

</style>
