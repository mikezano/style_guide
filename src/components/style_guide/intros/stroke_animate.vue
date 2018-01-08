<template lang="pug">
	svg.icon.icon-clock.stroked(width="144" height="144" viewBox="0 0 144 144")
		path.long(d="m 71.99,35.87 c 19.97,0.1 36.11,16.23 36.11,36.24 0,19.93 -16.32,35.99 -36.19,36.09 -19.94,0 -36.14,-16.16 -36.13,-36.14 0,-19.95 16.2,-36.14 36.19,-36.18 z m 0,-4.16 c 22.24,0 40.31,18.08 40.31,40.3 C 112.2,94.25 94.24,112.3 72.01,112.3 49.77,112.2 31.75,94.25 31.76,72.02 31.74,49.82 49.79,31.67 72,31.71 z")

</template>


<script>
	export default{name: "stroke_animate"}
</script>

<style lang="scss" scoped>
$light-orange: #F2B657;
$grey:         #444;

.icon {
	width: 282px; height: 282px; margin: -30px;
	path{
		fill:none; 
		stroke-dashoffset:0;
		stroke-width: 1; 
		stroke:$light-orange;
		&.long{
			stroke-dasharray:420,420;
			transition: 1.5s all ease;
		}
	}
}
.icon:hover{
	path.long{stroke-dashoffset:420;}
}
</style>