<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<a class="navbar-burger burger" @click="toggle">
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>
		<div class="navbar-menu" :class="{ 'is-active': open }">
			<div class="navbar-start">
				<router-link :to="{ name:'admin', exact: true }" class="nav">Admin</router-link>
				<router-link :to="{ name:'roles', exact: true }" class="nav">Roles</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			open: false
		}
	},
	methods: {
		toggle() {
			this.open = !this.open;
		}
	}
}
</script>

<style>

</style>
