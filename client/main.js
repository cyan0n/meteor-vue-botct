import Vue from 'vue';
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

import './main.html';
import App from './App.vue';

Meteor.startup(() => {

	new Vue({
		el: '#app',
		...App
	});
});