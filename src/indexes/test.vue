<template lang="pug">
.container
	h1 Examples
	.examples
		.default.btn-circle
			| 🤷
		.fruit.btn-circle
			| 🍓
		.vegetable.btn-circle
			| 🥕
		.face.btn-circle
			| 🤢

	vuer_examples(name="circle_zoom_examples")
</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples'

export default{
	name: 'test',
	components: {
		vuer_examples
	}
}
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
.default{@include btn-circle();}
.fruit{@include btn-circle(red, 40px);}
.vegetable{@include btn-circle(orange, 20px);}
.face{@include btn-circle(green, 60px);}

.examples{
	display:flex;
	align-items:center;
}
</style>