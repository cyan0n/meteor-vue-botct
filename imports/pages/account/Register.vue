<template>
	<form @submit.prevent="submit">
		<div class="field">
			<label for="name" class="label">Name</label>
			<div class="control has-icons-right">
				<input v-model.trim="$v.name.$model" type="text" name="name" class="input" :class="{'is-danger': $v.name.$error }">
			</div>
			<p class="help is-danger" v-if="$v.name.$error && !$v.name.required">Name required</p>
			<p class="help is-danger" v-if="$v.name.$error && !$v.name.minLength">Name longer than 2</p>
		</div>

		<div class="field">
			<label for="password" class="label">Password</label>
			<div class="control">
				<input v-model.trim="$v.password.$model" type="password" name="password" class="input" :class="{'is-danger': $v.password.$error}">
			</div>
			<p class="help is-danger" v-if="$v.password.$error && !$v.password.required">Password required</p>
			<p class="help is-danger" v-if="$v.password.$error && !$v.password.minLength">Password longer min 4</p>
		</div>
		<div class="field">
			<label for="confirm" class="label">Confirm password</label>
			<div class="control">
				<input v-model.trim="$v.confirm.$model" type="password" name="confirm" class="input" :class="{'is-danger': $v.password.$error}">
			</div>
			<p class="help is-danger" v-if="$v.confirm.$error && !$v.confirm.sameAsPassword">Password not same</p>
		</div>
		<div class="control">
			<button class="button" @click="submit">Register</button>
		</div>
		<div v-if="error != ''" class="notification is-danger" @click="close">
			<button class="delete"></button>
			{{ error }}
		</div>
	</form>
</template>

<script>
import { Accounts } from 'meteor/accounts-base';
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
	data() {
		return {
			name: '',
			password: '',
			confirm: '',
			error: '',
		}
	},
	methods: {
		submit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				// Register User
				Accounts.createUser({
					username: this.name,
					password: this.password,
				}, (err) => {
					if (err) {
						this.error = err.reason;
					} else {
						this.$router.push({ name : 'home'});
					}
				});
			}
		},
		close() {
			this.error = '';
		}
	},
	validations: {
		name: {
			required,
			minLength: minLength(3),
		},
		password: {
			required,
			minLength: minLength(4),
		},
		confirm: {
			sameAsPassword: sameAs('password'),
		},
	},
}
</script>

<style lang="scss">

</style>

