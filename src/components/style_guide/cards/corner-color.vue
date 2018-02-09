<template lang="pug">
.container
	.blue.card
		.card__header 
			.card__header__indicator  
			.card__header__text Shabby
		.card__content 
			| 90's fingerstache franzen cloud bread. Shoreditch meditation
			| prism pok pok ennui, art party microdosing authentic truffaut
			| fam jean shorts paleo shabby chic cardigan.

	.red.card
		.card__header 
			.card__header__indicator  
			.card__header__text Bitters
		.card__content 
			| Kogi tote bag readymade post-ironic tattooed pour-over selvage
			| skateboard. Cold-pressed fanny pack blog hoodie etsy plaid coloring
			| book man bun vexillologist direct trade bitters cloud bread enamel
			| pin hot chicken typewriter. Ennui 3 wolf moon migas, dreamcatcher

	.green.card
		.card__header 
			.card__header__indicator  
			.card__header__text  Church-key
		.card__content
			| Occupy raw denim cred church-key. Before they sold out next level pork belly

	.orange.card
		.card__header 
			.card__header__indicator  
			.card__header__text  Williamsburg 
		.card__content Godard adaptogen man bun williamsburg 

</template>


<script>
export default{name: "corner-color"}
</script>

<style lang="scss" scoped>
@mixin corner-card($color, $width){
	$gray: hsla(0,0%,80%, 1);
	$el: card;
	&.#{$el}{
		border:1px solid $gray;
		background-color:white;
		width: $width;
		margin:8px;
		padding:2px;
		transition: box-shadow .2s ease-out;
		&:hover{box-shadow:2px 2px 4px $gray;}
		.#{$el}__header{
			&__indicator{
				position:absolute;
				border-style: solid;
				border-width: 30px 30px 0 0;
				border-color: 
					$color
					transparent
					transparent
					transparent;
			}
			&__text{
				text-align:center;
				font-weight:bold;
				line-height:30px;
			}
		}
		.#{$el}__content{
			text-align:left;
			padding:4px;
			font-size:14px;
		}
	}
}//corner-card end
.blue{@include corner-card(#007bff, 200px);}
.red{@include corner-card(#CC0000, 250px);}
.green{@include corner-card(#FF8800, 90%);}
.orange{@include corner-card(#007E33, 250px);}
</style>