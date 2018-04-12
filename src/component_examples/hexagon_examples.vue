<template lang="pug">
.examples
    .default
        .hexagon Hex
    .milky-way
        .hexagon 🌌
    .palm-tree
        .hexagon 🌴

</template>

<script>
export default { name: 'hexagon_examples' };
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
@import '../sass/colors';

.default {
  @include hexagon-btn(60px, map-get($colors, danger));
}
.milky-way {
  @include hexagon-btn(100px, map-get($colors, primary));
}
.palm-tree {
  @include hexagon-btn(100px, map-get($colors, green));
}
.examples {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>