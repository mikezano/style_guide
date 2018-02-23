<template lang="pug">
.default.btn-circle
	| 🤷
</template>

<script>
	export default{
		name: 'circle_zoom'
	}
</script>

<style lang="scss" scoped>
@mixin btn-circle($color:#aaa, $size:20px){
	$selector: btn-circle;
	&.#{$selector}{
		border:none;
		background-color:$color;
		color:black;
		width: $size*2;
		height: $size*2;
		margin: 4px;
		font-size: $size;
		line-height: $size*2;
		border-radius: $size;
		//box-shadow:2px 2px 4px hsla(0,0%,0%,1);
		transition: 
			transform .1s ease-out, 
			box-shadow .1s ease-out;
		&:hover{
			transform:scale(1.05);
			box-shadow:1px 1px 2px hsla(0,0%,0%,.5);
			background-color:lighten($color, 3%);
			cursor:pointer;
		}
		&:active{
			transform:scale(1.02);
		}
		&:focus{
			outline:none;
		}
	}
}//cricle-btn end
.default{@include btn-circle();}
</style>