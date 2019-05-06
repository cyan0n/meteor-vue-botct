import { Meteor } from 'meteor/meteor';

// Import All Collections
import '/imports/collections/Games';
import '/imports/collections/Roles';

import './migrations';
import './publications';
import './methods';

Meteor.startup(() => {
  // code to run on server at startup
  Migrations.unlock();
  Migrations.migrateTo(1);
});
