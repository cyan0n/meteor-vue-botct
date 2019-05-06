<template>
	<div>
		<admin-nav></admin-nav>
		Admin Layout
		<router-view></router-view>
	</div>
</template>

<script>
import AdminNav from '/imports/admin/components/AdminNav.vue';

export default {
	components: { AdminNav }
}
</script>

<style>

</style>
