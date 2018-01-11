<template lang="pug">
	.animation-container
		svg
			symbol#text
				text( x="50%" y="98%" text-anchor="middle") AD&S
			use.text(xlink:href='#text')
		.presents Presents
</template>

<script>
	export default{name: "rolling_spin"}
</script>

<style lang="scss" scoped>

$orange : orange;
$stroke-dash: 400;
@mixin draw_in(){
	.animation-container{

		svg {
			width:15em;
			height:4em;

			text{
				fill: transparent;
				font-family:"Arial", Gadget, sans-serif;
				font-weight:bold;
				stroke-dashoffset: $stroke-dash;
				stroke-width: 1;
				stroke: $orange;
				stroke-dasharray: $stroke-dash;
				transition: 1.5s all ease;
				animation: text 3s linear forwards;
				font-size:5em;
				box-shadow:2px 2px 3px black;
			}
		}

		.presents{
			animation: go-up 1s 1s ease-in-out forwards;
			opacity:0;
			color:#444;
		}
	}


	@keyframes go-up {
		from{
			transform: translateY(1em);
			opacity:0;
		}
		to{
			transform: translateY(0);
			opacity:1;
		}
	}
	@keyframes text {
		50%{
			stroke-dashoffset: 0;
			fill:transparent;
		}
		100%{
			stroke-dashoffset: 0;
			fill: lighten($orange, 20%);
		}
	}
}//draw_in end
</style>