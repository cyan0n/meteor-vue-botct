import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vuelidate from 'vuelidate';
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';
import WebFont from 'webfontloader';

Vue.use(VueMeteorTracker);
Vue.use(Vuelidate);

// Add Modal with promise
Vue.prototype.$modalPromise = function(component, props) {
	return new Promise(resolve => {
		const ComponentClass = Vue.extend(component);
		const instance = new ComponentClass({ propsData: props || {} });
		// TODO Add slots https://css-tricks.com/creating-vue-js-component-instances-programmatically/#article-header-id-3
		// Add resolve event listner
		instance.$once('close', value => {
			instance.$destroy();
			instance.$el.remove();
			resolve(value);
		});

		// Insert into the DOM
		instance.$mount();
		document.body.appendChild(instance.$el);
	});
};

Vue.prototype.$modal = function(component, props) {
	const ComponentClass = Vue.extend(component);
	const instance = new ComponentClass({
		propsData: props || {}
	});
	// TODO Add slots https://css-tricks.com/creating-vue-js-component-instances-programmatically/#article-header-id-3
	// Add resolve event listner
	instance.$once('close', () => {
		instance.$destroy();
		instance.$el.remove();
	});

	// Insert into the DOM
	instance.$mount();
	document.body.appendChild(instance.$el);
};

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