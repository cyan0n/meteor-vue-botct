<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<span v-if="User" class="navbar-item">{{ User.username }}</span>
			<a class="navbar-burger burger" :class="{'is-active':active}" @click.prevent="active = !active">
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>
		<div class="navbar-menu" :class="{'is-active':active}">
			<div class="navbar-end">
				<a class="navbar-item" @click.prevent="logout">Logout</a>
			</div>
		</div>
	</nav>
</template>

<script>
import { UsersSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ UsersSub ],
	data() {
		return {
			active: false
		}
	},
	methods: {
		logout () {
			Meteor.logout(() => {
				this.$router.push({name: 'login'});
			});
		},
	},
}
</script>

<style>

</style>
