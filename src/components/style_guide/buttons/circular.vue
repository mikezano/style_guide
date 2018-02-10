<template lang="pug">
.container
	button.circle
		icon(name="refresh" scale="1")
	button.circle
		icon(name="bath", scale="1")
	button.circle
		icon(name="blind", scale="1")
	button.circle
		icon(name="truck", scale="1")
	button.circle-lg
		icon(name="apple", scale="1")
</template>


<script>
export default{name: 'circular'}
</script>

<style lang="scss" scoped>

@mixin circle-btn($color, $size){
	border:none;
	background-color:$color;
	color:black;
	width: $size;
	height: $size;
	margin: 4px;
	font-size: $size/2;
	border-radius: $size/2;
	box-shadow:2px 2px 4px hsla(0,0%,0%,1);
	transition: 
		transform .1s ease-out, 
		box-shadow .1s ease-out;
	&:hover{
		transform:scale(1.1);
		box-shadow:3px 3px 5px hsla(0,0%,0%,.5);
		background-color:lighten($color, 3%);
		cursor:pointer;
	}
	&:active{
		transform:scale(1.05);
	}
	&:focus{
		outline:none;
	}
}//cricle-btn end
.circle{@include circle-btn(orange, 24px);}
.circle-lg{@include circle-btn(pink, 48px);}
</style>