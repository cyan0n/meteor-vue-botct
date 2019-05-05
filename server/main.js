import { Meteor } from 'meteor/meteor';

import './migrations';
import roles from './migrations/roles';
import '/imports/methods/Games';
import '/imports/collections/Games';
import '/imports/publications/Games';
import '/imports/publications/Roles';

Meteor.startup(() => {
  // code to run on server at startup
  Migrations.migrateTo('1');
});
