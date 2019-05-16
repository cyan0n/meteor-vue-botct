<template>
	<div>
		<role-option v-for="role in roles" :key="role.label" :role=role @toggle=toggle :disabled="maxed"></role-option>
	</div>
</template>

<script>
import RoleOption from '/imports/components/ScriptBuilder/RoleOption';
import Script from '/imports/collections/Script';

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
		type: String,
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
				Script.insert(role);
				this.selected++;
			} else {
				// remove from selected
				Script.remove({label:role.label})
				this.selected--;
			}
		},
	},
	meteor: {
		$subscribe: {
			'Script': [],
		},
		Script() {
			return Script.find({type: this.type});
		},
	}
}
</script>

<style>

</style>
