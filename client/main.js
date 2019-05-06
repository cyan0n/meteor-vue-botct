import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vuelidate from 'vuelidate';
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';
import WebFont from 'webfontloader';

Vue.use(VueMeteorTracker);
Vue.use(Vuelidate);

// Create router instance
import './routes';
const routerFactory = new RouterFactory({
	mode: 'history',
	scrollBehavior: nativeScrollBehavior,
});

import './main.html';
import App from './App.vue';

Meteor.startup(() => {
	// Load Google Fonts
	WebFont.load({
		google: {
			families: [
				'Cinzel',
				'Raleway',
				'Macondo+Swash+Caps',
				'Libre+Baskerville',
			],
		},
	});

	// Initialize Router + Vue app
	const router = routerFactory.create();

	new Vue({
		router,
		el: '#app',
		...App
	});
});