<template lang="pug">
div
	.good
		.rollover
			.rollover__container
				.rollover__main GOOD
				.rollover__sub 
					| 💚

	.bad
		.rollover
			.rollover__container
				.rollover__main BAD
				.rollover__sub 
					| 😈

</template>

<script>
import vuer_alt from '@/components/vuer/vuer_alt'
import vuer_examples from '@/components/vuer/vuer_examples'

export default{
	name: 'rollover_examples',
	components: {
		vuer_alt,
		vuer_examples
	}
}
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
@import '../sass/colors';

.good{ @include rollover(50px, $bs_blue, white);}
.bad{ @include rollover(100px, $bs_blue, white);}
</style>