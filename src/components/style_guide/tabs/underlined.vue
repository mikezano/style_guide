<template lang="pug">
.container
	input#tab1(type="radio" name="tabs" checked)
	label(for="tab1") Tab 1
	input#tab2(type="radio" name="tabs")
	label(for="tab2") Tab 2
	input#tab3(type="radio" name="tabs")
	label(for="tab3") Tab 3
	input#tab4(type="radio" name="tabs")
	label(for="tab4") Tab 4
	.content
		.content1
			| Content for Tab 1
		.content2
			| Content for Tab 2
		.content3
			img(src="https://tinyurl.com/y8n2spmr" width="200" height="200")
		.content4
			| Content for Tab 4
</template>


<script>
	export default{name: "underlined"}
</script>

<style lang="scss" scoped>

@import '../../../sass/colors';

@mixin underlined_tabs(){

	.content > div { 
		display:none; 
		font-size:14px;
		padding: 10px;
		height:300px;
		border-bottom:1px solid lightgray;
	}
	input {display: none;}
	label {
		display: inline-block; 
		padding: 5px 10px; 
		text-align: center;
		margin:0 2px;
		border-bottom: 4px solid #bebebe;
		transition: all .2s ease-out;
	}
	label:hover {
		cursor: pointer;
		border-bottom: 4px solid $vue_green;
	}
	input:checked + label {
		border-bottom: 4px solid $vue_green;
	}

	#tab1:checked ~ .content .content1,
	#tab2:checked ~ .content .content2,
	#tab3:checked ~ .content .content3,
	#tab4:checked ~ .content .content4{
		display:block;
	};

}//underlined_tabs end

@include underlined_tabs();

</style>