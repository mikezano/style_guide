<template lang="pug">
.container
	.grid-container
		.cell.a Header
		.cell.b Left
		.cell.c 
			p
				| Veggies es bonus vobis, proinde vos
				| postulo essum magis kohlrabi welsh onion 
				| daikon amaranth tatsoi tomatillo melon azuki bean garlic.
		.cell.d Right
		.cell.e Footer
</template>


<script>
export default{name: "classic_layout"}
</script>

<style lang="scss" scoped>

.container{
	width:100%;
	margin:20px;
}
@mixin classic_grid_layout(){
	.grid-container{
		display:grid;
		grid-template-columns: 20% 60% 20%;
		grid-gap:2px;
		.cell{

			color:white;
			border:1px solid lightgrey;
			text-align:center;
			background-color: hsla(153, 50%, 48%, 1);
			&.a, &.e{
				grid-column:1/4;
			}
			&.b, &.c, &.d{
				height:100%;
			}
		}
	}
}//classic_grid_layout end

@include classic_grid_layout();
</style>