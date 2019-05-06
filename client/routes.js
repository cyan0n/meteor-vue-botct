import { RouterFactory } from 'meteor/akryum:vue-router2'

// Routes
import routes from '/imports/routes.js';
import admin_routes from '/imports/admin/routes.js';

// Page Components
import NotFound from '/imports/pages/NotFound.vue';

RouterFactory.configure(factory => {
	// Simple routes
	factory.addRoutes([
		...routes,
		...admin_routes,
	]);
});

// Not found page
RouterFactory.configure(router => {
	router.addRoute({
		path: '*',
		component: NotFound,
	});
}, -1);