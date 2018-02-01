<template lang="pug">
	.container
		button.plus.spin-btn
			icon(name="plus" scale="5")
		button.wheelchair.spin-btn
			icon(name="wheelchair-alt" scale="4")
		button.refresh.spin-btn
			icon(name="refresh" scale="2")
		button.cog.spin-btn
			icon(name="cog" scale="1")
</template>


<script>
	export default{
		name: "spin"
	}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin spin-btn($color){
	$selector: spin-btn;
	&.#{$selector}{
		margin:10px;
		border:none;
		background:none;
		color:$color;
		transition: 
			transform .5s ease-out, 
			color .7s ease-out;
		display:inline-flex;
		align-items: center;
		justify-content: center;

		&:hover{
			color:lighten($color,10%);
			transform: rotate(360deg);
		}
	}
}//spin-btn end
.plus{@include spin-btn($bs_green);}
.wheelchair{@include spin-btn($bs_blue);}
.refresh{@include spin-btn($bs_orange);}
.cog{@include spin-btn($bs_red);}
</style>