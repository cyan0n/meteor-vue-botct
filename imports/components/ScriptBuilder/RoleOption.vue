<template>
	<div class="role-option" :class="{checked:checked}" @click="toggle">
		<img :src="icon" alt="">
		{{ role.name.en }}
		<span class="icon"><i class="mdi" :class="{'mdi-radiobox-blank':!checked, 'mdi-radiobox-marked': checked}"></i></span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: false,
		};
	},
	computed: {
		icon() {
			return '/images/icons/' + this.role.icon;
		}
	},
	props: ['role', 'maxed'],
	methods: {
		toggle() {
			if (!this.maxed || this.checked) {
				this.checked = !this.checked;
				this.$emit('toggle', this.checked, this.role);
			}
		}
	}
}
</script>

<style lang="scss">
.role-option {
	cursor: pointer;
	border: 1px solid gray;
	display: flex;
	&.checked {
		background-color: #94e994;
	}
}
</style>

