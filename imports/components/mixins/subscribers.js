import '/imports/collections/Games';

export const GamesSub = {
	meteor: {
		$subscribe: {
			'CurrentGame': []
		},
		Games() {
			return Games.find();
		},
		Game() {
			let game = Games.findOne();
			if (game) {
				return game;
			}
			return false;
		},
		Full() {
			if (this.Game) {
				return Object.keys(this.Game.script).length == Object.keys(this.Game.players).length;
			}
			return false;
		},
		Role() {
			if (this.Game) {
				return this.Game.players[Meteor.userId()];
			}
			return null;
		}
	}
};

export const UsersSub = {
	meteor: {
		$subscribe: {
			'Meteor.users.admins': []
		},
		User() {
			return Meteor.users.findOne({
				'_id': Meteor.userId()
			});
		},
	}
}