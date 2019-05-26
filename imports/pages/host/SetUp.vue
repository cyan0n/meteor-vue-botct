<template>
	<div>
		<div class="select is-medium">
			<select v-model="size" @change="chooseSize">
				<option value="0">How many players?</option>
				<option v-for="(item, number) in game_sizes" :value="number" :key="number">{{number}}</option>
			</select>
		</div>

		<div v-if="size > 0 && $subReady.Roles">
			<div v-for="(type, index) in types" :key="type">
				<div :class="{'is-hidden': !player_sizes[type]}"><!-- or chosen > 0 -->
					<button class="button" @click="$refs.select[index].open()">{{ type }} {{ chosenSize(type) }}/{{ player_sizes[type] }}</button>
					<modal ref="select" :title=type>
						<role-select :roles="getRoles(type)" :limit=player_sizes[type] @add=add @remove=remove></role-select>
					</modal>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Modal from '/imports/components/utils/Modal';
import RoleSelect from '/imports/components/RoleSelect';
import { ScriptSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ ScriptSub ],
	components: {
		Modal,
		RoleSelect,
	},
	data() {
		return {
			size: 0,
			types: ['Townsfolk', 'Outsiders', 'Minions', 'Demons'],
			player_sizes: [],
		}
	},
	computed: {
		game_sizes() {
			return Meteor.settings.public.players;
		},
	},
	methods: {
		chooseSize() {
			this.player_sizes = Meteor.settings.public.players[this.size];
		},
		open(roles) {
			this.$modal(RoleSelect, {
				roles: roles,
				title: 'Title',
				limit: 3
			});
		},
		getRoles(name) {
			switch(name) {
				case 'Townsfolk': return this.Townsfolk;
				case 'Outsiders': return this.Outsiders;
				case 'Minions': return this.Minions;
				case 'Demons': return this.Demons;
			}
		},
		chosenSize(type) {
			switch (type) {
				case 'Townsfolk': return this.Script_Townsfolk.length;
				case 'Outsiders': return this.Script_Outsiders.length;
				case 'Minions': return this.Script_Minions.length;
				case 'Demons': return this.Script_Demons.length;
			}
		},
		add(role) {
			// Special cases
			switch (role.label) {
				case 'baron': {
					this.player_sizes.Townsfolk -= 2;
					this.player_sizes.Outsiders += 2;
					break;
				}
				case 'drunk': {
					let drunk = role;
					this.$modalPromise(RoleSelect,{
						props: {
							roles: this.Townsfolk,
							limit: 1,
							choose: true,
						},
						on: {
							chosen (role) {
								Script.remove({label: 'drunk'})
								// TODO: function to assign role token
								role.assigned = {
									label: drunk.tokens[0]
								};
								role.type = "outsider";
								// Disable role
								Script.insert(role);
								console.log(role)
							}
						}
					})
					break;
				}
			}
		},
		remove(role) {
			// Special cases
			switch (role.label) {
				case 'baron': {
					this.player_sizes.Townsfolk += 2;
					this.player_sizes.Outsiders -= 2;
					break;
				}
			}
		},
	},
	meteor: {
		$subscribe: {
			'Roles': [],
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
