// Only Games in progress (should be only one)
Meteor.publish('CurrentGame', function () {
	// TODO for players exclude other player's roles
	return Games.find({'state': { $ne: 'closed' }});
});
/*
Meteor.publish('AllUsers', () => {
	// TODO check user is admin
	return Meteor.users.find({});
});*/

Meteor.publish('Meteor.users.admins', () => {
	let options = {
		fields: {
			username: 1
		}
	};

	if (Meteor.userId() && Meteor.user().isAdmin) {
		options.fields.isAdmin = 1;
	}
	
	return Meteor.users.find({_id: Meteor.userId()}, options);
});

Meteor.publish('Roles', function () {
	return Roles.find({});
});