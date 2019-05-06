import Layout from '/imports/Layout.vue';
import Home from '/imports/pages/Home.vue';
import Role from '/imports/pages/Role.vue';
import Prep from '/imports/pages/Prep.vue';
import Registration from '/imports/pages/User/Registration';
import Login from '/imports/pages/User/Login';

/* Host */
import HostLobby from '/imports/pages/Game/Host/Lobby';

import Lobby from '/imports/pages/Game/Lobby';
import Token from '/imports/pages/Game/Token';

export default [
	{
		path: '/',
		component: Layout,
		beforeEnter: (to, from, next) => {
			if (to.meta.anon && Meteor.userId()) {
				next({name: 'home'});
			} else if (!to.meta.anon && !Meteor.userId()) {
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
			/* Auth */
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
			{
				path: 'host/lobby',
				name: 'host_lobby',
				component: HostLobby,
			},
			{
				path: 'lobby',
				name: 'lobby',
				component: Lobby,
			},
			{
				path: 'token',
				name: 'token',
				component: Token,
			}
		]
	},
];