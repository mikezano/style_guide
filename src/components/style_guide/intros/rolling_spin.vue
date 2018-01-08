<template lang="pug">
	.animation-container
		svg
			symbol#text
				text(text-anchor='middle' x='50%', y='100' ) AD&S
			use.text(xlink:href='#text')
		.presents Presents
</template>

<script>
	export default{name: "rolling_spin"}
</script>

<style lang="scss" scoped>

.animation-container{
	font-size: 2em;
	opacity: 1;
	svg {
		border:1px solid;
		width:300px;
		height:100px;

		text{
			fill: transparent;
			stroke-dashoffset: 320;
			stroke-width: 1;
			stroke: orange;
			stroke-dasharray: 320;
			transition: 1.5s all ease;
			animation: text 2s linear forwards;
			font-size:100px;
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