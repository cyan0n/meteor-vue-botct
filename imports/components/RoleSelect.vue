<template>
	<div>
		<role-option v-for="role in roles" :key="role.label" :role=role @toggle=toggle :disabled="maxed"></role-option>
	</div>
</template>

<script>
import RoleOption from '/imports/components/ScriptBuilder/RoleOption';

export default {
	components: { RoleOption },
	data() {
		return {
			value: {},
			selected: 0
		}
	},
	props: {
		roles: Array,
		limit: Number,
		disabled: Array,
		script: {
			type: Object,
			default: () => {return {}},
		}
	},
	computed: {
		maxed() {
			return this.selected >= this.limit;
		}
	},
	mounted() {
		this.value = this.script;
	},
	methods: {
		toggle(checked, role) {
			if (checked) {
				// add to selected
				this.value[role.label] = role;
				this.selected++;
			} else {
				// remove from selected
				delete this.value[role.label];
				this.selected--;
			}
		},
	},
}
</script>

<style>

</style>
