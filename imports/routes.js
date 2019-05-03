import Layout from '/imports/views/Layout.vue';
import Home from '/imports/views/pages/Home.vue';
import Role from '/imports/views/pages/Role.vue';
import Prep from '/imports/views/pages/Prep.vue';
import Registration from '/imports/views/pages/User/Registration';
import Login from '/imports/views/pages/User/Login';

export default [
	{
		path: '/',
		component: Layout,
		beforeEnter: (to, from, next) => {
			if (to.meta.anon && Meteor.userId()) {
				next({name: 'home'});
			} else if (!Meteor.userId()) {
				next({name: 'login'});
			}
			next();
		},
		children: [
			/* No Auth */
			{
				path: 'login',
				name: 'login',
				component: Login,
				meta: { anon: true },
			},
			{
				path: 'registration',
				name: 'registration',
				component: Registration,
				meta: { anon: true },
			},
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: 'role',
				name: 'role',
				component: Role,
			},
			{
				path: 'prep',
				name: 'prep',
				component: Prep,
			},
		]
	},
];