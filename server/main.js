import { Meteor } from 'meteor/meteor';

// Import All Collections
import '/imports/collections/Games';
import '/imports/collections/Roles';

import './migrations';
import './publications';
import './methods';

// First user registared is Admin
Accounts.onCreateUser((options, user) => {
	if (Meteor.users.find({}).count() == 0) {
		user.isAdmin = true;
	}
	return user;
});

Meteor.startup(() => {
	// code to run on server at startup
	Migrations.unlock();
	Migrations.migrateTo(1);
});
