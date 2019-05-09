<template>
	<div v-if="Role">
		<role-token :role="Role" face="up"></role-token>
	</div>
</template>

<script>
import RoleToken from '/imports/components/RoleToken';

export default {
	components: {
		RoleToken,
	},
	meteor: {
		$subscribe: {
			'CurrentGame': []
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

<style>

</style>
