<template lang="pug">
	.animation-container
		svg(width="300" height="100" viewBox="0 00 300 100")
			symbol#text
				text( x='0', y='100') AD&S
			use.text(xlink:href='#text')
		.presents Presents
</template>

<script>
	export default{name: "rolling_spin"}
</script>

<style lang="scss" scoped>

.animation-container {
	font-size: 4em;
	opacity: 1;
}

.animation-container svg {
	border:1px solid;
}

.animation-container svg .text {

	fill: transparent;
	stroke-dashoffset: 320;
	stroke-width: 1;
	stroke: orange;
	stroke-dasharray: 320;
	transition: 1.5s all ease;
	animation: text 2s linear forwards;
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