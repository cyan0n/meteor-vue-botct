<template>
	<div class="game">
		<nav-bar v-if="!$router.currentRoute.meta.anon"></nav-bar>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
import NavBar from '/imports/components/NavBar';

export default {
	components: {
		NavBar,
	}
}
</script>
