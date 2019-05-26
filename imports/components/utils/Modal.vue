<template>
	<div class="modal" :class="{'is-active': active || temp}">
		<div class="modal-background" @click="close"></div>
		<div class="modal-card">
			<header v-if="title" class="modal-card-head">
				<span class="modal-card-title">{{ title }}</span>
			</header>
			<section class="modal-card-body">
				<slot @close=close></slot>
			</section>
		</div>
		<button class="modal-close is-large" @click="close"></button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: false,
		}
	},
	props: {
		title: String,
		temp: Boolean,
	},
	mounted() {
		this.$on('test',(a)=>{
			console.log('st');
			console.log(a);
		})
	},
	methods: {
		open() {
			this.active = true;
		},
		close() {
			this.active = false;
			this.$emit('close');
		},
	}
}
</script>
