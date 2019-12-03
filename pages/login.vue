<template>
  <div>
    <v-alert type="error" v-if="error" prominent dismissible>
      {{ error }}
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-btn
        :disabled="valid !== true"
        color="success"
        class="mr-4"
        @click="submit"
        >Validate</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  components: {},
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v =>
        /^(?=.*[a-z])/.test(v) ||
        "Password must contain at least 1 lowercase alphabetical character.",
      v =>
        /(?=.*[A-Z])/.test(v) ||
        "Password must contain at least one uppercase letter.",
      v =>
        /(?=.*[0-9])/.test(v) || "Password must contain at least one number.",
      v =>
        /(?=.[!@#\$%\^&])/.test(v) ||
        "Password must contain at least one special character.",
      v => (v && v.length >= 6) || "Name must be at least 6 characters"
    ],
    error: null
  }),

  methods: {
    async submit() {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);

        this.$router.push("/admin");
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
