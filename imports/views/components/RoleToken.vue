<template>
	<div class="role-token" v-if="role" @click="$emit('click', role)">
		<template v-if="faceUp">
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
		</template>
		<template v-else>
			<img src="/images/logo.svg" class="back">
		</template>
	</div>
</template>

<script>
export default {
	data() {
		return {
			faceUp: false,
		}
	},
	computed: {
		icon() {
			return '/images/icons/' + this.role.icon;
		}
	},
	mounted() {
		this.faceUp = (this.face == 'up');
	},
	props: {
		role: {
			type: Object,
			required: true,
		},
		face: {
			type: String,
			default: 'down',
			required: false,
			validator: value => ['up', 'down'].indexOf(value) !== -1,
		}
	},
	methods: {
	}
}
</script>

<style lang="scss" scoped>
	.role-token {
		border: 10px solid #404040;
		border-radius: 100px;
		background: url('/images/token_bg.jpg');
		background-position: center;
		position: relative;
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
		font-size: 11px;
		left: 0;
		line-height: 12px;
		text-align: center;
		font-family: 'Libre Baskerville', serif;
		text-shadow: 0 0 5px white;
	}
	img {
		width: 200px;
	}
	textPath {
		font-family: 'Macondo Swash Caps', cursive;
	}
	img.back {
		filter: brightness();
		width: 66%;
		margin: auto;
	}
</style>

