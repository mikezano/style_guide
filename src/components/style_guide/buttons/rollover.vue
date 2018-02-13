<template lang="pug">
.container
	.good
		button.rollover
			.rollover__container
				.rollover__main GOOD
				.rollover__sub 
					icon(name="thumbs-up")
</template>

<script>
export default {name: "rollover"}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';

@mixin rollover($size, $color){
	margin:4px;
	.rollover{
		width: 2 * $size;
		height:$size;
		overflow:hidden;
		padding:0;
		border:1px solid darken($color, 10%);
		color:white;

		&:hover{
			.rollover__container{
				margin-top: -1 * $size;
				cursor:pointer;
			}
		}
		&__container{
			background-color:$color;
			transition: all .5s ease-in-out;
		}
		&__main{
			height:$size;
			line-height:$size;
			font-size: $size/2;
		}
		&__sub{
			height:$size;
			line-height:$size;
			font-size: $size/3;
		}
	}
}//rollover end
.good{ @include rollover(50px, $bs_blue);}
</style>