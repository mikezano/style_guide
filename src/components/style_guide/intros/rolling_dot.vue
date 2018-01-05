<template lang="pug">
	#outer
		.die
		.words
			.a A
			.d D
			.amp &
			.s S
			.presents Presents
		.dot-container
			.dot1
			.dot2
			.dot3
	</div>
</template>


<script>
	export default{name: "rolling_dot"}
</script>

<style lang="scss" scoped>

#outer{
	display:flex;
	align-items:flex-start;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 2em;
	position:relative;
}
.words{
	display:flex;
	align-items:flex-start;
	width:250px;
}
.dot-container{
	display: flex;
	justify-content:space-between;
	width:40px;
}
.a, .d, .amp, .s {
	font-weight: bold;
	opacity: 0;
	text-shadow: 4px 8px lightgray;
	color: #444;
	animation: slide-down .2s ease-in-out forwards;
}

.a {animation-delay: .1s;}
.d {animation-delay: .2s;}
.amp {animation-delay: .3s;}
.s { animation-delay: .4s;}

.dot1, .dot2, .dot3 {
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: orange;
	margin-top: .8em;
	opacity: 0;
	animation: jump 1s ease-in-out infinite;
}

.presents {
	opacity: 0;
	animation: fade-in-presents 1s ease-in-out .5s forwards;
	margin: 0 10px;
	color: gray;
}

.dot1 {
	animation-delay: 1.44s;
}

.dot2 {
	animation-delay: 1.54s;
}

.dot3 {
	animation-delay: 1.64s;
}

.die {
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: orange;
	//background-size: 50%;
	position:absolute;
	margin-top: 1em;
	animation: move-dot 1.5s ease-in-out forwards;
}

@keyframes slide-down {
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	50% {
		font-size: 32px;
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes jump {
	0% {
		transform: translateY(0);
		opacity: 1;
	}
	50% {
		transform: translateY(-10px);
		opacity: 1;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes fade-in-presents {
	0% {
		opacity: 0;
		transform: translateY(-10px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes move-dot {
	0% {transform: translateX(0);}
	80% {
		transform: translateX(250px);
		margin-top:1em;
	}
	95% {
		transform: translateX(250px);
		margin-top: .8em;
		opacity: 1;
	}
	100% {
		transform: translateX(250px);
		margin-top: .8em;
		opacity: 0;
	}
}
</style>