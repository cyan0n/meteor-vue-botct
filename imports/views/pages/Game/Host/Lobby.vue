<template>
	<div>
		<h2>host lobby</h2>
		<div>
			<div v-for="(role, id) in Players" :key="role.label">
				<h3>{{ username(id) }}</h3>
				<role-token
					:role="role"
					face="up"></role-token>
			</div>
		</div>
		<output>
			player has chosen role...<br>
			.<br>
			.<br>
			.<br>
			players are ready
		</output>
	</div>
</template>

<script>
import RoleToken from '/imports/views/components/RoleToken';
import '/imports/collections/Games';

export default {
	components: {
		RoleToken,
	},
	data() {
		return {
			
		}
	},
	methods: {
		playersReady() {
			// Go to Night round
		},
		username(id) {
			console.log('ID', id)
			return Meteor.users.findOne({_id:id}).username
		}
	},
	meteor: {
		$subscribe: {
			'CurrentGame': [],
			'AllUsers': [],
		},
		Game() {
			return Games.findOne();
		},
		Role() {
			let game = Games.findOne();
			if (!game) {
				return false;
			}

			// get user role in this game
			return game.players[Meteor.userId()];
		},
		Players() {
			let game = Games.findOne();
			if (!game) {
				return false;
			}

			return game.players;
		},
		Script() {
			let game = Games.findOne();
			if (game) {
				let script = game.script;
				for (var key in script) {
					if (script.hasOwnProperty(key)) {
						if (script[key].chosen) {
							delete script[key];
						}
					}
				}
				return script;
			}
			return false;
		}
	}
}
</script>
