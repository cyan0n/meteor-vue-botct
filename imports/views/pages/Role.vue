<template>
	<role-token :role="role"></role-token>
</template>

<script>
import RoleToken from '/imports/view/RoleToken.vue';

export default {
	components: { RoleToken },
	data() {
		return {
			role: {
				type: "townsfolk",
				edition: "troubles_brewing",
				label: "washerwoman",
				name: {
					en: "Washerwoman",
					it: "Lavandaia",
				},
				icon: 'Washerwoman_icon.png',
				tokens: [
					{
						label: "wrong",
						name: {
							en: "Wrong"
						},
						quantity: 1
					},
					{
						label: "townsfolk",
						name: {
							en: "Townsfolk"
						},
						quantity: 1
					},
				],
				wake: 1,
				description: {
					en: "You start knowing that 1 of 2 players is a particular Townsfolk",
					it: "",
				},
				flavour: {
					en: "Bloodstains on a dinner jacket? No. This is cooking sherry. How careless.",
					it: "",
				},
				almanac: {
					en: "",
					it: "",
				}
			}
		}
	},
}
</script>

<style>

</style>
