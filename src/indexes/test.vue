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

	vuer_alt(name="circle_zoom")

</template>

<script>
import vuer_alt from '@/components/vuer/vuer_alt'

export default{
	name: 'test',
	components: {
		vuer_alt
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