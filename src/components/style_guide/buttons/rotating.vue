<template lang="pug">
.rotating-btn
	.rotating-btn__container
		.rotating-btn__main
			span Main
			| 😊
		.rotating-btn__alt
			span  Alt
			| 😮
</template>


<script>
export default{name: "rotating"}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin rotating-btn($width, $height){

	.rotating-btn{
		width:$width;
		height:$height;
		cursor:pointer;
		perspective:500px;
	}
	.rotating-btn .rotating-btn__container{
		height:100%;
		transform-style:preserve-3d;
		transition:0.25s;
		position:relative;
	}
	.rotating-btn__container:hover{
		transform:rotateX(-90deg);
	}
	.rotating-btn__main, .rotating-btn__alt{
		width:100%;
		position:absolute;
		box-sizing:border-box;
		border: ($height * .05) solid map-get($colors, primary);
		line-height: ($height * .95);
		text-align:center;
		background-color:#fff;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.rotating-btn__main{
		transform: translate3d(0, 0, 30px);
	}
	.rotating-btn__alt{
		transform: rotateX(90deg) translate3d(0, 0, 30px);
	}
}//rotate_down end

@include rotating-btn(200px, 60px);

</style>