import Layout from '/imports/Layout.vue';
import Home from '/imports/pages/Home.vue';
import Role from '/imports/pages/Role.vue';
import Prep from '/imports/pages/Prep.vue';
import Register from '/imports/pages/account/Register';
import Login from '/imports/pages/account/Login';

/* Host */
import HostLobby from '/imports/pages/Game/Host/Lobby';

import Lobby from '/imports/pages/Game/Lobby';
import Token from '/imports/pages/Game/Token';

/* Player */
import PickRole from '/imports/pages/PickRole';
import Game from '/imports/pages/Game';

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
				path: 'register',
				name: 'register',
				component: Register,
				meta: { anon: true },
			},
			/* Auth */
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: 'pick-role',
				name: 'pick-role',
				component: PickRole,
			},
			{
				path: 'game/',
				component: Game,
				children: [
					{
						path: 'lobby',
						name: 'lobby',
						component: Lobby,
					}
				],
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
				path: 'token',
				name: 'token',
				component: Token,
			}
		]
	},
];