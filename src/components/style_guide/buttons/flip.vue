<template lang="pug">
	button.flip-btn Watch this!
</template>


<script>
	export default{
		name: 'flip'
	}
</script>

<style lang="scss" scoped>

@mixin flip-btn(){
	$selector: flip-btn;
	&.#{$selector}{
		$shadow-color: black;
		box-shadow:2px 2px 4px $shadow-color;
		transition: all 1s ease-in-out;
		color:blue;
		&:hover{
			transform: rotateX(360deg);
			box-shadow:4px 4px 8px lighten($shadow-color, 20%);
		}
	}
}//zoom-btn end
@include flip-btn();

</style>