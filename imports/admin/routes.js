import Layout from '/imports/admin/views/Layout.vue';
import Admin from '/imports/admin/views/pages/Admin.vue';
import Roles from '/imports/admin/views/pages/Roles.vue';

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