import Roles from '/imports/collections/Roles';
import roles from './migrations/roles';

Migrations.add({
	version: 1,
	up() {
		roles.forEach(role => {
			Roles.insert(role);
		});
	},
	down() {
		Roles.remove({});
	}
})