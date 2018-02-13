<template lang="pug">
div
	button.small-zoom.zoom-btn Small Zoom
</template>


<script>
export default{name: 'zoom'}
</script>

<style lang="scss" scoped>

@mixin zoom-btn($scale){
	$selector: zoom-btn;
	&.#{$selector}{
		$shadow-color: black;
		box-shadow:2px 2px 4px $shadow-color;
		transition: all .2s ease-in-out;
		color:blue;
		&:hover{
			transform: scale($scale);
			box-shadow:4px 4px 8px lighten($shadow-color, 20%);
		}
	}
}//zoom-btn end
.small-zoom{@include zoom-btn(1.1);}
</style>