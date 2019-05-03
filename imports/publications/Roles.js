Meteor.publish('Roles', function () {
	return Roles.find({});
});