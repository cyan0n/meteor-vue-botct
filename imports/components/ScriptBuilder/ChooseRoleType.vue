<template>
	<div>
		<button @click="open = true" class="button" :class="{'is-hidden': !button}" >{{title}} {{ chosen }}/{{ limit }}</button>

		<div class="modal" :class="{'is-active': open}">
			<div class="modal-background" @click="open = false"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<span class="modal-card-title">{{title}} {{ chosen }}/{{ limit }}</span>
				</header>
				<section class="modal-card-body">
					<role-option v-for="role in roles" :key="role.label" :role=role @toggle=toggle :maxed="maxed"></role-option>
				</section>
			</div>
			<button class="modal-close is-large" @click="open = false"></button>
		</div>
	</div>
</template>

<script>
import RoleOption from '/imports/components/ScriptBuilder/RoleOption';

export default {
	components : { RoleOption },
	data() {
		return {
			open: false,
			chosen: 0,
		}
	},
	props: {
		title: String,
		roles: Array,
		limit: Number,
		button: {
			type: Boolean,
			default: true,
		}
	},
	computed: {
		maxed() {
			return this.chosen >= this.limit;
		}
	},
	methods: {
		toggle(checked, role) {
			if (checked) {
				this.chosen ++;
			} else {
				this.chosen --;
			}
			this.$emit('update', checked, role);
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>

