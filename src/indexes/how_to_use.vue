<template lang="pug">
	.container
		.how_to_use
			h1 How To Use
			div First, install to your project
			code npm install ads_mixer

			div
				| Make all the mixins available by adding this important to your
				| root sass file:
			code @import '~ads_mixer/ads_mixer.scss';

			div 
				| In your javascript file import the component you want to use:

			code import drawin from 'ads_mixer/intros/draw_in';


			div For Vue single file component files, refrence the component 
			code 
				| components: {
				|	drawin
				| }

			div add the component in your template
			code 
				| &lt;h1&gt; Foo &lt;/h1&gt;
				br
				| &lt;drawin&gt;
				br
				| &lt;p&gt; Foo &lt;/p&gt;

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




</template>

<script>
export default {
	name: 'how_to_use'
}
</script>

<style lang="scss" scoped>
	.container{
		display:flex;
		justify-content: center;
	}
	.how_to_use{
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

