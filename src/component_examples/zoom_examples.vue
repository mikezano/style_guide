<template lang="pug">
.examples
    button.small-zoom.zoom-btn Small Zoom
    button.large-zoom.zoom-btn Large Zoom
</template>

<script>
export default { name: 'zoom_examples' };
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
@import '../sass/colors';

.small-zoom {
  @include zoom-btn(1.1);
}

.large-zoom {
  @include zoom-btn(2);
}

.examples {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>