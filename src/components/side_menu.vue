<template lang="pug">
	.side-menu
		div(@click="close")
			icon(name="close" class="close-icon")
		.header
			img(src="./../assets/logo.png")
			p Style Guide
		
		ul
			router-link(to="/style_guide/drop_downs" tag="li") Drop Downs
			router-link(to="/style_guide/buttons" tag="li") Buttons
			router-link(to="/style_guide/tabs" tag="li") Tabs
			router-link(to="/style_guide/cards" tag="li") Cards
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'

export default {
	methods: {
		close () {
			 this.$emit('closeMenu');
		}
	},
  components:{
		icon
	}
}
</script>

<style lang="scss">
$base1: hsla(153, 50%, 48%, 1);
$base2: hsla(211, 28%, 29%, 1);

.close-icon{
	position:absolute;
	right:0;
	margin: 10px 10px 0 0;
}

.side-menu{
	width:200px;
	position:absolute;
	z-index:100;
	left:0px;
	top:0;
	bottom:0;
	//border-right:1px solid darkgray;
  $yellow: hsla(0, 0%, 13%,1);
  $yellow2: hsla(0, 0%, 17%, 1);
  $yellow3: rgba(240,166,17,0);
background:
  radial-gradient(circle farthest-side at 0% 50%, $yellow2 23.5%, $yellow3 0)21px 30px,
  radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0) 19px 30px,
  linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0)0 0,
  linear-gradient(150deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
  linear-gradient(30deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
  linear-gradient(90deg,$yellow 2%,$yellow2 0,$yellow2 98%,$yellow 0%)0 0 $yellow2;
background-size:40px 60px;

	color:white;
	box-shadow:2px 2px 20px gray;

	ul{
		list-style-type: none;
		margin:0;
		padding:0;
	}	
		li{
			padding:10px 0;

			a{
				color:white;
				text-decoration:none;
			}
		}
}

.header{
	background:linear-gradient(to right, $base1 , $base2);
	padding: 20px 0;
	display:flex;
	justify-content: center;
	align-items: center;
	img{
		width:30px;
		height:30px;
	}
}
</style>


