<template lang="pug">
	div
		//.container-btn
			.rotate_down
				.text 
					span Download The Style Guide
				.visual
					span  style_guide.scss
					icon(name="download", scale="2")
			
		.threeD-btn
			.threeD-btn__container
				.threeD-btn__text 
					span Download The Style Guide
				.threeD-btn__rollover
					icon(name="download", scale="2")
					span  style_guide.scss
</template>


<script>
	export default{name: "rotate_down_btn"}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import '../sass/colors';

$color:rgb(random(150) ,random(150) ,random(150));

@mixin rotate_down_btn($width, $height){
	$selector: 3D-btn;
	
	$line-height: $height - 4;
	$border-width: 2px;
	.threeD-btn{
		width:$width;//400px
		height:$height;//40px
		cursor:pointer;
		perspective:500px;
	}
	.threeD-btn__container{
		height:100%;
		transform-style:preserve-3d;
		transition:0.25s;
		position:relative;
	}
	.threeD-btn__container:hover{
		transform:rotateX(-90deg);
	}
	.threeD-btn__text, .threeD-btn__rollover{
		width:100%;
		color: white;
		position:absolute;
		left:0;
		box-sizing:border-box;
		border:$border-width solid darken($vue_green, 20%);
		font-family:'Source Sans Pro',sans-serif;
		line-height:$line-height; // 40px -10px
		text-align:center;
		text-transform:uppercase;
		background-color:$vue_green;
		//background:radial-gradient($vue_green, darken($vue_green, 20%));
		display:flex;
		align-items: center;
		justify-content: center;
	}
	.threeD-btn__text{
		transform: translate3d(0, 0, $height/2);
	}
	.threeD-btn__rollover{
		transform: rotateX(90deg) translate3d(0, 0, $height/2);
	}

}

@include rotate_down_btn(400px, 60px);
.container-btn{
	width:400px;
	height:40px;
	cursor:pointer;
	perspective:500px;
}
.container-btn .rotate_down{
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
	line-height:30px;
	text-align:center;
	text-transform:uppercase;
	background-color:#fff;
	display:flex;
	align-items: center;
	justify-content: center;
}
.text{
	color:blue;
	transform: translate3d(0, 0, 20px);
}
.visual{
	color:$color;
	background:#fff;
	transform: rotateX(90deg) translate3d(0, 0, 20px);
}


</style>