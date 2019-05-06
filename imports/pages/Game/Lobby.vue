<template>
	<div>
		<h2>Game Lobby</h2>
		choose role
		<div id="roles" v-if="$subReady.CurrentGame && Game">
			<role-token v-for="(role) in Script" :key="role.label"
				:role="role"
				@click="SelectToken"
				:class="{selected:role==selected}"></role-token>
		</div>
		<button class="button" :disabled="!selected" @click="ConfirmToken">Confirm</button>
	</div>
</template>

<script>
import RoleToken from '/imports/components/RoleToken';
import '/imports/collections/Games';

export default {
	data() {
		return {
			selected: null,
		}
	},
	components: {
		RoleToken,
	},
	methods: {
		SelectToken(role) {
			this.selected = role
		},
		ConfirmToken() {
			// Remove Role from being shown
			Meteor.call('SelectRole', this.selected);
			this.$router.push({name: 'token'});
		}
	},
	meteor: {
		$subscribe: {
			'CurrentGame': []
		},
		Game() {
			return Games.findOne();
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
<style lang="scss">
#roles {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.role-token {
		margin: 16px;
		zoom: 0.7;
	}
	.selected {
		border: 10px solid pink;
	}
}
</style>
