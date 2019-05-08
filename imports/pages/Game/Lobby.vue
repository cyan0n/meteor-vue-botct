<template>
	<div>
		<!-- Waiting for players -->
		<div v-if="Full">
			<h1>Your role is</h1>
			<role-token v-if="Role" :role="Role" face="up"></role-token>
		</div>
		<div v-else>
			Waiting for players...
		</div>
	</div>
</template>
<script>
import RoleToken from '/imports/components/RoleToken.vue';
import { GamesSub, UsersSub } from '/imports/components/mixins/subscribers';

export default {
	mixins: [ GamesSub, UsersSub ],
	components: { RoleToken },
}
</script>