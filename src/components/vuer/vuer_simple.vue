<template lang="pug">
	.vuer
		.vuer__header
			| {{name.replace('_',' ')}}
		.vuer__component
			component(:is="component")
</template>

<script>
import { mapGetters } from 'vuex';
import circle_zoom from '@/components/style_guide/buttons/circle_zoom';

export default {
  name: 'viewer_alt_simple',
  props: ['name'],
  watch: {
    name: function(newVal, oldVal) {
      this.getSources();
    }
  },
  data() {
    return {
      scss: null,
      pug: null,
      mixin: null,
      component: null,
      route: '',
      pugRE: new RegExp('(?<=<template lang="pug">).*?(?=</template>)', 's'),
      scssRE: new RegExp('(?<=<style lang="scss" scoped>).*?(?=</style>)', 's')
    };
  },
  mounted() {
    this.getSources();
    this.route = `/style_guide/${this.$route.params.components}/${this.name}`;
  },
  computed: {
    ...mapGetters(['getComponent', 'getHtmlSingleFile'])
  },
  methods: {
    getSCSSPUG() {
      //https://hackernoon.com/you-need-to-discover-the-awesome-clipboard-web-api-12b248d05dd3
      let htmlSingleFile = this.getHtmlSingleFile(this.name);
      // Create the textarea input to hold our text.
      const element = document.createElement('textarea');
      element.value = htmlSingleFile;
      // Add it to the document so that it can be focused.
      document.body.appendChild(element);
      // Focus on the element so that it can be copied.
      element.focus();
      element.setSelectionRange(0, element.value.length);
      // Execute the copy command.
      document.execCommand('copy');
      // Remove the element to keep the document clear.
      document.body.removeChild(element);
    },
    getSources() {
      this.component = this.getComponent(this.name);
      let source = this.component.source.replace(/\t/g, '  ');

      this.pug = this.extractCode(source, this.pugRE);
      this.scss = this.extractCode(source, this.scssRE);
    },
    extractCode(source, re) {
      let code = source.match(re);
      let result = code[0].replace(/\n/g, ' ').trim();
      return result;
    }
  },
  components: {
    circle_zoom
  }
};
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.vuer__links {
  display: flex;
  position: absolute;
  justify-content: flex-end;
  top: 1.5rem;
  right: 1rem;
  
  .vuer__examples,
  .vuer__copy {
    width: 50px;
  }
}
.vuer__examples,
.vuer__copy {
  border: none;
  background: none;
}

.vuer {
  padding: 1rem;
  margin-bottom: 3rem;
  border: 1px solid lightgray;
  position: relative;
  background-color: hsla(0, 0%, 0%, 0.05);
  min-width: 30rem;

  &__component {
    margin: 2rem 0;
  }

  &__header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }

  &__scss,
  &__pug {
    padding: 0;

    label {
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
    }

    code {
      max-height: 20rem;
    }
  }
}
</style>
