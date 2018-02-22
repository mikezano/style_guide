<template lang="pug">
	.container
		.how_to_use
			h1 How To Use
			div First, install to your project from either:
			code npm install mixifier
			div or:
			code npm install git+https://git@github.intel.com/dejavu/mixifier.git

			div
				| Make all the mixins available to your sass files
				| by adding this import to your root sass file:
			code @import "~mixifier/mixer.scss";
			

			div 
				| In the javascript portion of your single component vue file
				| import the component you want to use:

			code import roll from 'mixifier/intros/rolling_dot'


			div For Vue single file component files, refrence the component 
			code 
				| components: {
				|	roll
				| }

			div Add the component in your template
			code 
				| &lt;h1&gt; Foo &lt;/h1&gt;
				br
				| &lt;roll&gt;&lt;/roll&gt;
				br
				| &lt;p&gt; Bar &lt;/p&gt;

			div For Aurelia refrence the component through the compose element in your markup
			code 
				| &lt;compose
				br
				| &nbsp;&nbsp;view="ads_mixer/intros/draw_in.html"
				br
				| &gt;
				br
				| &lt;/compose&gt;
				br
		.single_file_markup
			h1 Single File usage
			div 
				| If you are not using sass in your project you can alternatively use a
				| plain ol' style block and html together




</template>

<script>
export default {
	name: 'how_to_use'
}
</script>

<style lang="scss" scoped>
	.container{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.how_to_use, .single_file_markup{
		width:400px;
		text-align:left;
	}
	code{
		display:block;
		padding:10px;
		margin:10px;
		background-color: #333;
		color:white;
	}
</style>

