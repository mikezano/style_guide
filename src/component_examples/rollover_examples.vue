<template lang="pug">
.examples
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
	.shrug
		.rollover
			.rollover__container
				.rollover__main Shrug
				.rollover__sub 
					| ¯\_(ツ)_/¯

</template>

<script>
import vuer_examples from '@/components/vuer/vuer_examples';

export default {
  name: 'rollover_examples',
  components: {
    vuer_examples
  }
};
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
@import '../sass/colors';

.good {
  @include rollover(50px, $bs_blue, white);
}
.bad {
  @include rollover(100px, $bs_red, white);
}
.shrug {
  @include rollover(100px, $bs_green, white);
}
.examples {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>