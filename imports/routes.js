import Layout from '/imports/views/Layout.vue';
import Home from '/imports/views/pages/Home.vue';
import Role from '/imports/views/pages/Role.vue';
import Prep from '/imports/views/pages/Prep.vue';
import Registration from '/imports/views/pages/User/Registration';
import Login from '/imports/views/pages/User/Login';

/* Host */
import HostLobby from '/imports/views/pages/Game/Host/Lobby';

import Lobby from '/imports/views/pages/Game/Lobby';
import Token from '/imports/views/pages/Game/Token';

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