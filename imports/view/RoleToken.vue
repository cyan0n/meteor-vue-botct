<template>
	<div class="role-token">
		<svg viewBox="-5 -5 110 110">
			<path d="m0,50a50,50 0 0 0 100,0" id="arch" fill="transparent"/>
			<text width="500" text-anchor="middle">
				<textPath xlink:href="#arch" startOffset="50%">
					{{ role.name.en }}
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
		height: 200px;
		width: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	svg {
		width: 188px;
		position: absolute;
		z-index: 10;
	}
	p {
		position: absolute;
		z-index: 10;
		color: black;
		top: 20px;
		width: 121px;
		margin: auto;
		right: 0;
		font-size: 12px;
		left: 0;
		line-height: initial;
		text-align: center;
	}
	img {
		width: 200px;
	}
</style>

