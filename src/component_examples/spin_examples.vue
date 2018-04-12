<template lang="pug">
.examples
    button.soccer-ball.spin-btn ⚽
    button.plus.spin-btn ➕
    button.sun.spin-btn 🌞
    button.hello.spin-btn Hi
</template>

<script>
export default { name: 'spin_examples' };
</script>

<style lang="scss" scoped>
@import 'mixifier/ads_mixer.scss';
@import '../sass/colors';

.soccer-ball {
  @include spin-btn($bs_green, 1.5);
}
.plus {
  @include spin-btn($bs_green, 1.5);
}
.sun {
  @include spin-btn($bs_green, 1.5);
}
.hello {
  @include spin-btn($bs_green, 1.5);
}

.examples {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>