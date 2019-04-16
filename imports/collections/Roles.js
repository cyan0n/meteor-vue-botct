Roles = new Mongo.Collection('roles');

Roles.schema = new SimpleSchema({
	name: {type: String},
	desc_short: {type: String},
	desc_long: {type: String},
	tokens: {type: Number, defaultValue: 0}
});

export default Roles;