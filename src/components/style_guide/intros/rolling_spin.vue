<template lang="pug">
	.animation-container
		svg
			symbol#text
				text( alignment-baseline="hanging") AD&S
			use.text(xlink:href='#text')
		.presents Presents
</template>

<script>
	export default{name: "rolling_spin"}
</script>

<style lang="scss" scoped>

$stroke-dash: 400;
.animation-container{

	svg {
		border:1px solid;
		width:300px;
		height:100px;

		text{
			fill: transparent;
			stroke-dashoffset: $stroke-dash;
			stroke-width: 1;
			stroke: orange;
			stroke-dasharray: $stroke-dash;
			transition: 1.5s all ease;
			animation: text 2s linear forwards;
			font-size:100px;
			box-shadow:2px 2px 3px black;
		}
	}
}

@keyframes text {
	50%{
		stroke-dashoffset: 0;
		fill:transparent;
	}
	100%{
		stroke-dashoffset: 0;
		fill:orange;
	}
}
</style>