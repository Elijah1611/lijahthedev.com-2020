<template>
  <v-container>
    <v-alert type="error" v-if="error" prominent>{{ error }}</v-alert>
    <v-form v-model="valid">
      <v-text-field
        v-if="!logout"
        v-model="account.email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        solo
        required
      ></v-text-field>

      <v-text-field
        v-if="!logout"
        v-model="account.password"
        :rules="passwordRules"
        label="Password"
        type="password"
        solo
        required
      ></v-text-field>

      <v-btn color="blue" to="/"> <v-icon>mdi-home</v-icon>Home </v-btn>

      <v-btn
        v-if="!logout"
        :disabled="valid !== true"
        color="warning"
        @click="logIn"
      >
        <v-icon color="orange">mdi-fire</v-icon>Login
      </v-btn>

      <v-btn v-else color="danger" @click="logOut">
        <v-icon color="red">mdi-exit-to-app</v-icon>Logout
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  props: {
    logout: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    valid: false,
    error: null,
    account: {
      email: "",
      password: ""
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
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
    ]
  }),

  methods: {
    logIn() {
      this.$store
        .dispatch("login", this.account)
        .catch(error => (this.error = error));

      this.$router.push("/admin");
    },
    logOut() {
      this.$store.dispatch("logout").catch(error => (this.error = error));

      this.$router.push("/login");
    }
  }
};
</script>
