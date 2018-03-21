<template lang="pug">

.examples
	button.watch-this.btn.btn-primary.btn-flip Watch this!
	button.three-sixty.btn.btn-secondary.btn-flip 360!
	button.flip.btn.btn-danger.btn-flip FLIP!
</template>

<script>

export default{
	name: 'flip_examples'
}
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';

.watch-this{ @include flip-btn(200px); }
.three-sixty{ @include flip-btn(100px); }
.flip{ @include flip-btn(300px); }

.examples{
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	height:140px;
}
</style>