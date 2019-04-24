<template>
	<div>
		<select v-model="chosen_number" name="num_players">
			<option value="null">How many players?</option>
			<option v-for="(item, number) in player_numbers" :value="number" :key="number">{{number}}</option>
		</select>
		<ul v-if="chosen_number > 0">
			<li>Townsfolk 0/{{ numbers.townsfolk }}</li>
			<li>Outsiders 0/{{ numbers.outsiders }}</li>
			<li>Minions 0/{{ numbers.minions }}</li>
			<li>Demons 0/{{ numbers.demons }}</li>
		</ul>
		<div v-for="r in Townsfolk" :key="r.name.en">
			{{ r.name.en }} - {{ r.label }}
		</div>
		<button>Confirm</button>
	</div>
</template>

<script>
import '/imports/collections/Roles';

export default {
	data() {
		return {
			player_numbers: Meteor.settings.public.players,
			chosen_number: null,
		}
	},
	computed: {
		numbers() {
			return this.player_numbers[this.chosen_number];
		}
	},
	meteor: {
		$subscribe: {
			'Roles': []
		},
		RoleList() {
			return Roles.find({});
		},
		Townsfolk() {
			return Roles.find({"type":"townsfolk"});
		}
	}
}
</script>

<style lang="scss">

</style>
