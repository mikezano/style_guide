<template lang="pug">
	.animation-container
		svg
			symbol#text
				text( x="50%" y="98%" text-anchor="middle") AD&S
			use.text(xlink:href='#text')
		.presents Presents
		.container
			.dot
			.dot
			.dot

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
			animation: shadow 1s 2s linear forwards;

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

		.container{
			display: flex;
			justify-content: center;
		}
	}


	@keyframes shadow {
		0%{
			-webkit-filter: none;
		}
		100%{
			-webkit-filter: drop-shadow( 1px 1px 1px #aaa );
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
	$animation-speed: 1000ms;
	$dot-size: 10px;
@mixin animation($delay: 0ms) {
	animation: fx $animation-speed ease infinite $delay;
}
	.dot {

	width: $dot-size;
	height: $dot-size;
	border: ($dot-size / 5) solid gray;
	border-radius: 50%;
	float: left;
	margin: 0 ($dot-size / 2);
	transform: scale(0);
	@include animation();
	&:nth-child(2) {
		@include animation($animation-speed * 0.3);
	}
	&:nth-child(3) {
		@include animation($animation-speed * 0.6);
	}
}


@keyframes fx {
	50% {
		transform: scale(1);
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@include draw_in();
</style>