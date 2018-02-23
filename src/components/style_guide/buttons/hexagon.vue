<template lang="pug">
.hexagon Hex
</template>


<script>
export default{name: 'hexagon'}
</script>

<style lang="scss" scoped>

@import '../../../sass/colors';

.container{
	display:flex;
}

//http://csshexagon.com/
@mixin hexagon-btn($size: 100px, $color:#64C7CC){

	.hexagon {
		position: relative;
		width: $size; 
		height: $size * .57;
		line-height: $size * .57;
		background-color: $color;
		font-size:$size/2;
		margin: $size * .28 10px;
		color:white;
		transition: 
			background-color .5s,
			box-shadow .5s;

		&:hover{
			background-color:lighten($color, 10%);
			box-shadow:4px 4px 8px gray;
		}
	}

	.hexagon:before,
	.hexagon:after {
	content: "";
	position: absolute;
	left:0;
	width: 0;
	border-left: $size * .5 solid transparent;
	border-right: $size * .5 solid transparent;


	}

	.hexagon:before {
		bottom: 100%;
		border-bottom: $size * .28 solid $color;
		&:hover{
			border-bottom: $size * .28 solid lighten($color,10%);
		}
	}

	.hexagon:after {
		top: 100%;
		width: 0;
		border-top: $size * .28 solid $color;
	}

}// hexagon-btn end


@include hexagon-btn(60px, map-get($colors, danger));
</style>