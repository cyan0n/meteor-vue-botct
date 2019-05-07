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