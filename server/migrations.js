import Roles from '/imports/collections/Roles';

Migrations.add({
	version: 1,
	up() {
		Roles.insert({
			name: 'Lavandaia',
			desc_short: 'You start knowing that 1 of 2',
			desc_long: 'lorem ipsum loret ecc...'
		});
	},
	down() {
		Roles.remove({});
	}
})