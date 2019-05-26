<template>
	<div>
		<role-option v-for="role in roles" :key="role.label" :role=role @toggle=toggle :disabled="maxed"></role-option>
	</div>
</template>

<script>
import RoleOption from '/imports/components/ScriptBuilder/RoleOption';
import { ScriptSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ ScriptSub ],
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
		choose: {
			required: false,
			type: Boolean,
			default: false
		}
	},
	computed: {
		maxed() {
			if (this.selected >= this.limit) {
				this.$emit('complete', this.Script);
			}
			this.$emit('test', this.Script);
			return this.selected >= this.limit;
		}
	},
	mounted() {
		this.value = this.script;
	},
	methods: {
		toggle(checked, role) {
			if (this.choose) {
				console.log('ads');
				this.$emit('chosen', role);
				this.$emit('close');
				return;
			}

			if (checked) {
				// add to selected
				Script.insert(role);
				this.selected++;
				this.$emit('add', role);
			} else {
				// remove from selected
				Script.remove({label:role.label})
				this.selected--;
				this.$emit('remove', role);
			}
		},
	},
}
</script>
