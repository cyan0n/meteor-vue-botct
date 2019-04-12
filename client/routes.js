// Import the router
import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import Home from '/imports/pages/Home.vue'
import Page from '/imports/pages/Page.vue'
import NotFound from '/imports/pages/NotFound.vue';

RouterFactory.configure(factory => {
	// Simple routes
	factory.addRoutes([{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/page',
			name: 'page',
			component: Page,
		},
	]);
});

RouterFactory.configure(router => {
	router.addRoute({
		path: '*',
		component: NotFound,
	});
}, -1);