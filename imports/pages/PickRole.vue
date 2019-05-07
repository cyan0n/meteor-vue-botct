<template>
	<div>
		<!-- Waiting for Game -->
		<h1>Waiting for new game</h1>

		<!-- Show and pick the role -->
		

		<!-- Waiting for all Players to pick -->
		<h1>Waiting for all players to pick, n left</h1>
	</div>
</template>

<script>
import { GamesSub, UsersSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ GamesSub, UsersSub ],
}
</script>

<style>

</style>
