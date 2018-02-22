<template lang="pug">
button.btn.btn-primary.btn-flip Watch this!
</template>


<script>
export default{name: 'flip'}
</script>

<style lang="scss" scoped>

@mixin flip-btn(){
	$selector: btn-flip;
	&.#{$selector}{
		transition: all 1s ease-in-out;
		&:hover{
			transform: rotateX(360deg);
		}
	}
}//flip end
@include flip-btn();

</style>