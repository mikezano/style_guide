<template lang="pug">
	.side-menu
		.side-menu__close(@click="close")
			icon(name="close" class="close-icon")
		.side-menu__header
			img(src="./../assets/logo.png")
			router-link(to="/style_guide" tag="p") Style Guide
		
		.side-menu__sections
			.side-menu__section-header Usage
			ul.side-menu__section-list
				router-link(to="/how_to_use" tag="li") How to use
				router-link(to="/test" tag="li") Test
			.divider
			.side-menu__section-header Components
			ul.side-menu__section-list
				router-link(to="/style_guide/drop_downs" tag="li") Drop Downs
				router-link(to="/style_guide/buttons" tag="li") Buttons
				router-link(to="/style_guide/tabs" tag="li") Tabs
				router-link(to="/style_guide/cards" tag="li") Cards
				router-link(to="/style_guide/intros" tag="li") Intros
			.divider
			.side-menu__section-header How To
			ul.side-menu__section-list
				router-link(to="/style_guide/grid_layouts" tag="li") CSS Grid
			.divider
			.side-menu__section-header Naming
			ul.side-menu__section-list
				router-link(to="/bem", tag="li") B.E.M
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
	position:fixed;
	z-index:100;
	left:0px;
	top:0;
	bottom:0;
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

	&__header{
		background:linear-gradient(to right, $base1 , $base2);
		padding: 2rem 0;
		margin-left:0rem;
		display:flex;
		justify-content: center;
		align-items: center;
		img{
			width:30px;
			height:30px;
			transition: transform .3s ease-out;
		}
		&:hover{
			cursor: pointer;
			text-decoration: underline;
			img{
				transform: rotateY(180deg);
			}
		}
		p{margin:0;}
	}

	&__sections{
		padding-left:10px;
	}

	&__section-header{
		margin:10px 0;
		font-weight:bold;
		margin-left:10px;
	}

	p{
		font-weight:bold;
	}

	.divider{
		border-top:1px solid #555;
		margin:10px;
	}
	ul{
		list-style-type: none;
		margin:0;
		padding:0;
		padding-left:10px;
		text-align:left;
	}	
		li{
			padding:5px 0;
			font-size:14px;
			color:#aaa;
			&:hover{
				color:white;
				cursor:pointer;
			}
		}
}
</style>


