import '/imports/collections/Games';
import '/imports/collections/Script';

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

export const ScriptSub = {
	meteor: {
		$subscribe: {
			'Script': []
		},
		Script() {
			return Script.find();
		},
		Script_Townsfolk() {
			return Script.find({type: 'townsfolk'});
		},
		Script_Outsiders() {
			return Script.find({type: 'outsider'});
		},
		Script_Minions() {
			return Script.find({type: 'minion'});
		},
		Script_Demons() {
			return Script.find({type: 'demon'});
		},
	}
}