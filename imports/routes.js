import Layout from '/imports/views/Layout.vue';
import Home from '/imports/views/pages/Home.vue';
import Role from '/imports/views/pages/Role.vue';

export default [
	{
		path: '/',
		component: Layout,
		children: [
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
		]
	},
];