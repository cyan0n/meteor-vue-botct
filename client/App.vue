<template>
	<div class="grid">
		<router-view class="content"></router-view>
	</div>
</template>

<script>

export default {
	components: {  }
}
</script>

<style lang="scss">
	.grid {
		flex-grow: 1;
		display: grid;
		grid-template-columns: auto 600px auto;
		grid-template-rows: 80px auto 20px;
		grid-template-areas:
			". . ."
			". content .";
	}
	.content {
		grid-area: content;
	}
</style>
