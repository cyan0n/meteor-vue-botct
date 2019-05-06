import Layout from '/imports/admin/Layout.vue';
import Admin from '/imports/admin/pages/Admin.vue';
import Roles from '/imports/admin/pages/Roles.vue';

export default [
	{
		path: '/admin',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'admin',
				component: Admin,
			},
			{
				path: '/roles',
				name: 'roles',
				component: Roles,
			}
		]
	},
];