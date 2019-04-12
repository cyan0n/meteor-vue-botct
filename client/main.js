import Vue from 'vue';
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
	const router = routerFactory.create();

	new Vue({
		router,
		el: '#app',
		...App
	});
});