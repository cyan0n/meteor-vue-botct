import Layout from '/imports/views/Layout.vue';
import Home from '/imports/views/pages/Home.vue';

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
		]
	},
];