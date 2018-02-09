<template lang="pug">
.container
	.rotate_down
		.text 
			span Text
			icon(name="download", scale="2")
		.visual
			span  Visual
			icon(name="download", scale="2")
</template>


<script>
export default{name: "rotate_down"}
</script>

<style lang="scss" scoped>
@mixin rotate_down(){

	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
	$color:rgb(random(150) ,random(150) ,random(150));

	.container{
		width:200px;
		height:60px;
		cursor:pointer;
		perspective:500px;
	}
	.container .rotate_down{
		height:100%;
		transform-style:preserve-3d;
		-webkit-transform-style:preserve-3d;
		transition:0.25s;
		-webkit-transition:0.25s;
		position:relative;
	}
	.rotate_down:hover{
		transform:rotateX(-90deg);
	}
	.text, .visual{
		width:100%;
		//height:100%;
		position:absolute;
		left:0;
		box-sizing:border-box;
		border:5px solid rgb(18, 189, 61);
		font-family:'Source Sans Pro',sans-serif;
		line-height:50px;
		//font-size:17pt;
		text-align:center;
		text-transform:uppercase;
		background-color:#fff;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.text{
		color:blue;
		transform: translate3d(0, 0, 30px);
	}
	.visual{
		color:$color;
		background:#fff;
		transform: rotateX(90deg) translate3d(0, 0, 30px);
	}
}//rotate_down end

@include rotate_down();

</style>