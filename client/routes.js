// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

import routes from '/imports/routes.js';
import admin_routes from '/imports/admin/routes.js';

import NotFound from '/imports/views/pages/NotFound.vue';

RouterFactory.configure(factory => {
	// Simple routes
	factory.addRoutes([
		...routes,
		...admin_routes,
	]);
});

RouterFactory.configure(router => {
	router.addRoute({
		path: '*',
		component: NotFound,
	});
}, -1);