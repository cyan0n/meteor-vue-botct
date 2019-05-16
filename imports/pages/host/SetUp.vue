<template>
	<div>
		<div class="select is-medium">
			<select v-model="size">
				<option value="0">How many players?</option>
				<option v-for="(item, number) in game_sizes" :value="number" :key="number">{{number}}</option>
			</select>
		</div>

		<div v-if="size > 0">
			<div v-if="$subReady.Roles">
				<div v-for="(type, index) in types" :key="type">
					<template v-if="game_sizes[size][type]"><!-- or chosen > 0 -->
						<button class="button" @click="$refs.select[index].open()">{{ type }} /{{ game_sizes[size][type] }}</button>
						<modal ref="select" :title=type>
							<role-select :roles="getRoles(type)" :limit=game_sizes[size][type]></role-select>
						</modal>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Modal from '/imports/components/utils/Modal';
import RoleSelect from '/imports/components/RoleSelect';
import Script from '/imports/collections/Script';

export default {
	components: {
		Modal,
		RoleSelect,
	},
	data() {
		return {
			size: 0,
			types: ['Townsfolk', 'Outsiders', 'Minions', 'Demons'],
		}
	},
	computed: {
		game_sizes() {
			return Meteor.settings.public.players;
		}
	},
	mounted() {
		const handle = Script.find({}).observeChanges({
			added(id, obj) {
				console.log('asd');
				console.log(obj);
			},
			removed(id) {
				
			}
		})
	},
	methods: {
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
		}
	},
	meteor: {
		$subscribe: {
			'Roles': [],
			'Script': [],
		},
		Script() {
			return Script.find({});
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
