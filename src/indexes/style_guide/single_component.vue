<template lang="pug">
	vuer(:name="example" :class="{'dont-show' : single_component != null}")
</template>

<script>
import vuer from '@/components/vuer/vuer';
import { mapState, mapMutations } from 'vuex';
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
//const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
  name: 'single_component',
  props: ['single_component'],
  data() {
    return {
      vuer_fader: null,
      example: this.single_component + '_examples'
    };
  },
  mounted() {
    console.log('single_component:mounted', this.$el);
    this.$store.commit('setToEl', this.$el);

    this.vuerFader = this.$el.querySelectorAll('.vuer__fader')[0];

    if (
      this.$route.params.single_component != null &&
      this.isTransitioning == false
    ) {
      this.reveal();
    }
  },
  destroyed() {
    this.$el.classList.add('dont-show');
    this.vuerFader.classList.add('dont-show');
  },
  computed: {
    ...mapState(['isTransitioning']),
    ...mapMutations(['setToEl'])
  },
  methods: {
    reveal() {
      this.$el.classList.remove('dont-show');
      this.vuerFader.classList.add('fade-in');
    }
  },
  watch: {
    isTransitioning(newVal, oldVal) {
      if (newVal == false) {
        this.reveal();
      }
    }
  },
  components: {
    vuer
  }
};
</script>

<style lang="scss" scoped>
.dont-show {
  opacity: 0;
}
</style>
<style lang="scss">
.vuer__fader {
  &.fade-in {
    animation: fadeIn 2.5s cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    height: 0%;
  }
  to {
    opacity: 1;
    height: 100%;
  }
}
</style>

