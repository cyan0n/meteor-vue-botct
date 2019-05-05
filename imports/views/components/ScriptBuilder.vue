<template>
	<div>
		<div class="select is-medium">
			<select v-model="chosen_number" name="num_players">
				<option value="null">How many players?</option>
				<option v-for="(item, number) in player_numbers" :value="number" :key="number">{{number}}</option>
			</select>
		</div>
		
		<div v-if="chosen_number > 0">
			<role-type title="Townsfolk" :roles=Townsfolk :limit=numbers.townsfolk @update=toggleRole></role-type>
			<role-type title="Outsiders" :roles=Outsiders :limit=numbers.outsiders @update=toggleRole></role-type>
			<role-type title="Minion" :roles=Minions :limit=numbers.minions @update=toggleRole></role-type>
			<role-type title="Demons" :roles=Demons :limit=numbers.demons @update=toggleRole></role-type>
			<button class="button" v-if="chosen == chosen_number" @click.prevent="$emit('complete', script)">Confirm</button>
		</div>
	</div>
</template>

<script>
import '/imports/collections/Roles';
import ChooseRoleType from '/imports/views/components/ScriptBuilder/ChooseRoleType';

export default {
	components: { 'role-type' : ChooseRoleType },
	data() {
		return {
			player_numbers: Meteor.settings.public.players,
			chosen_number: null,
			script: {},
			chosen: 0,
		}
	},
	computed: {
		numbers() {
			return this.player_numbers[this.chosen_number];
		}
	},
	methods: {
		toggleRole(checked, role) {
			if (checked) {
				this.script[role.label] = role;
				this.chosen++;
			} else {
				delete this.script[role.label];
				this.chosen--;
			}
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
		},
		Outsiders() {
			return Roles.find({"type": "outsider"});
		},
		Minions() {
			return Roles.find({"type": "minion"});
		},
		Demons() {
			return Roles.find({"type": "demon"});
		},
	}
}
</script>

<style lang="scss">

</style>
