<template>
	<div>
		<img src="/images/logo.svg" alt="" class="logo">
		<h1 class="has-text-centered"><span class="blood">Blood</span> on the Clock Tower</h1>
		<template v-if="Game">
			<router-link :to="{ name: 'pick-role' }" class="button is-light">Join Game</router-link>
			<router-link v-if="User && User.isAdmin" :to="{ name: 'prep' }" class="button is-light">New Game</router-link>
		</template>
	</div>
</template>

<script>
import { GamesSub, UsersSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ GamesSub, UsersSub ],
}
</script>

<style lang="scss" scoped>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	h1 {
		font-family: 'Cinzel', serif;
		color: #efefef;
	}
</style>
