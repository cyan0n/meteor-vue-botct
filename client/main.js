import Vue from 'vue';
import WebFont from 'webfontloader';
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

import './main.html';
import App from './App.vue';

import './routes';
// Create router instance
const routerFactory = new RouterFactory({
	mode: 'history',
	scrollBehavior: nativeScrollBehavior,
});

Meteor.startup(() => {
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
	const router = routerFactory.create();

	new Vue({
		router,
		el: '#app',
		...App
	});
});