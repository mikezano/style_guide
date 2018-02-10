<template lang="pug">
.container
	.good
		button.rollover
			.rollover__container
				.rollover__main GOOD
				.rollover__sub 
					icon(name="thumbs-up")
	.bad
		button.rollover
			.rollover__container
				.rollover__main BAD
				.rollover__sub 
					icon(name="thumbs-down")
</template>