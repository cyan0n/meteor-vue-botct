<template>
	<div class="app-menu">
		<router-link :to="{ name:'home', exact: true }">Home</router-link>
		<router-link :to="{ name:'page' }">Page</router-link>
	</div>
</template>