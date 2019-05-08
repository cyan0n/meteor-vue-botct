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

			<role-type ref="drunk" title="Select Drunk" :button=false :roles=Townsfolk :limit=1 @update=chooseDrunk></role-type>
		</div>
	</div>
</template>

<script>
import '/imports/collections/Roles';
import ChooseRoleType from '/imports/components/ScriptBuilder/ChooseRoleType';

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
				this.chosen++;
				/* Special cases */
				switch (role.label) {
					case 'baron': {
						this.numbers.outsiders += 2;
						this.numbers.townsfolk -= 2;
						break;
					}
					case 'drunk': {
						// open Townsfolk selector
						this.$refs.drunk.open = true;
						return;
						// TODO Disable chosen townsfolk from selector
					}
				}
				this.script[role.label] = role;
			} else {
				this.chosen--;
				/* Special cases */
				switch (role.label) {
					case 'baron': {
						this.numbers.outsiders -= 2;
						this.numbers.townsfolk += 2;
						break;
					}
					case 'drunk' :{
						// re-enable chosen townsfolk form selector
						return;
					}
				}
				delete this.script[role.label];
			}
		},
		chooseDrunk(checked, role) {
			if (checked) {

				// Chosen townsfolk is added with 'drunk' key and 'drunks' token
				console.log(role.label+' is drunk!');
				role.equipped = {'drunk':true};
				this.script['drunk'] = role;
			} else {
				console.log(role.label + ' is sober!');
				delete this.script['drunk'];
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
