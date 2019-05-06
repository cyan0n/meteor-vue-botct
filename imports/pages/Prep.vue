<template>
	<div>
		<script-builder @complete="complete"></script-builder>
	</div>
</template>

<script>
import ScriptBuilder from '/imports/components/ScriptBuilder';


export default {
	components: { ScriptBuilder },
	methods: {
		complete(script) {
			// Create new Game with script
			Meteor.call('NewGame', script);

			this.$router.push({name: 'host_lobby'});
		}
	}
}
</script>

<style>

</style>
