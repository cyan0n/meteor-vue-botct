Meteor.publish('CurrentGame', function () {
	// TODO for players exclude other player's roles
	return Games.find({'state': { $ne: 'closed' }});
});

Meteor.publish('AllUsers', () => {
	// TODO check user is admin
	return Meteor.users.find({});
});

Meteor.publish('Roles', function () {
	return Roles.find({});
});