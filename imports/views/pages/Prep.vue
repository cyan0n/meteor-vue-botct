<template>
	<div>
	<!-- Choose number of players -->
	<select>
		<option :value="index" v-for="(item, index) in player_numbers"></option>
	</select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			player_numbers: Meteor.settings.players,
		}
	},
}
</script>

<style>

</style>
