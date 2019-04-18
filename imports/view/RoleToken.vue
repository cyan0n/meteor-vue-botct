<template>
	<div class="role-token">
		<h4>{{ role.name.en }}</h4>
		<svg viewBox="0 0 130 130">
			<path d="m20,70c0,-27.62431 22.37569,-50 50,-50c27.62431,0 50,22.37569 50,50c0,27.62431 -22.37569,50 -50,50c-27.62431,0 -50,-22.37569 -50,-50z" fill="black" id="circle" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" transform="rotate(-90 70 70)"/>
			<text width="500" text-anchor="middle">
				<textPath xlink:href="#circle" startOffset="50%">
				Dangerous Curves Ahead
				</textPath>
			</text>
		</svg>
		<img :src="icon">
		<p>{{ role.description.en }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			//role: null,
		}
	},
	computed: {
		icon() {
			return '/images/icons/' + this.role.icon;
		}
	},
	props: [ 'role' ],
}
</script>

<style lang="scss" scoped>
	.role-token {
		border: 6px solid #00b89c;
		background: white;
		position: absolute;
		border-radius: 100px;
		overflow: hidden;
		//height: 200px;
		//width: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	svg {
		width: 100px;
	}
</style>

