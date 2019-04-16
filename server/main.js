import { Meteor } from 'meteor/meteor';

import Roles from '/imports/collections/Roles';
import './migrations';

Meteor.startup(() => {
  // code to run on server at startup
  Migrations.migrateTo('latest');
});
