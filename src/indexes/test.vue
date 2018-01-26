<template lang="pug">
	drawin
</template>

<script>

import drawin from 'ads_mixer/intros/draw_in';

export default {
	name: 'test',
	components:{
		drawin
	}
}
</script>

<style lang="scss">
@import '~ads_mixer/ads_mixer.scss';
@include draw-in(green);
</style>
