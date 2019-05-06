Meteor.methods({
	NewGame(script) {
		Games.insert({
			script: script,
			created_at: new Date(),
			players: [],
			rounds: [],
			state: 'created',
			storyteller: Meteor.userId(),
		});
	},
	SelectRole(role) {
		// Set Role.chosen to true
		let set = {};
		set['script.' + role.label + '.chosen'] = true;
		set['players.' + Meteor.userId()] = role;

		Games.update({}, {
			$set: set
		})
		// Add Player to plays of game
	}
});