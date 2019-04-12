<template>
	<div>
		<app-menu></app-menu>
		<h2>Hello Vue</h2>
		<!-- Route content -->
		<router-view></router-view>
	</div>
</template>

<script>
import AppMenu from '/imports/pages/layout/AppMenu.vue';

export default {
	components: { AppMenu }
}
</script>