<template>
	<div class="role-option" :class="{checked: value, 'is-hidden':!value && disabled}" @click="toggle">
		<img :src="icon" alt="">
		{{ role.name.en }}
		<span class="icon">
			<i class="mdi" :class="{'mdi-radiobox-blank': !value, 'mdi-radiobox-marked': value}"></i>
		</span>
	</div>
</template>

<script>
export default {
	props: {
		role: {
			type: Object,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		maxed: Boolean
	},
	data() {
		return {
			value: false,
		};
	},
	computed: {
		icon() {
			return '/images/icons/' + this.role.icon;
		}
	},
	mounted() {
		this.value = this.checked;
	},
	methods: {
		toggle() {
			if (this.value || !this.disabled) {
				this.value = !this.value;
				this.$emit('toggle', this.value, this.role);
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

