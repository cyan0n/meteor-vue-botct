Meteor.publish('Games', function () {
	return Games.find({});
});

Meteor.publish('CurrentGame', function () {
	return Games.find({'state': {$ne: 'closed'}});
});

Meteor.publish('AllUsers', () => {
	return Meteor.users.find({});
});