<template>
	<div>
		<div v-if="!$subReady.CurrentGame">Loading...</div>
		<template v-else>
			<!-- Waiting for Game -->
			<h1 v-if="!Game">Waiting for new game</h1>

			<template v-else>
				<!-- Show and pick the role -->
				<div v-if="!Full">
					<h3>choose role</h3>
					<div id="roles" v-if="$subReady.CurrentGame && Game">
						<role-token v-for="(role) in Script" :key="role.label"
							:role="role"
							@click="SelectToken"
							:class="{selected:role==selected}"></role-token>
					</div>
					<button class="button" :disabled="!selected" @click="ConfirmToken">Confirm</button>
				</div>

				<!-- Full game -->
				<h1 v-else>Sorry, game is full</h1>
			</template>
		</template>
	</div>
</template>

<script>
import { GamesSub, UsersSub } from '/imports/components/mixins/subscribers';
import RoleToken from '/imports/components/RoleToken';

export default {
	mixins: [ GamesSub, UsersSub ],
	components: {
		RoleToken,
	},
	data() {
		return {
			selected: null,
		}
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
