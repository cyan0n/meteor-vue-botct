import { Meteor } from 'meteor/meteor';

import './migrations';
import roles from './migrations/roles';

Meteor.startup(() => {
  // code to run on server at startup
  Migrations.migrateTo('1');
});
