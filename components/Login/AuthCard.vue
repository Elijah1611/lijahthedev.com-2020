<template>
  <v-card
    class="text-center elevation-24 mx-auto mt-5"
    min-height="100%"
    max-width="800px"
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4" v-if="isLoggedIn">{{ user.email }}</div>
        <div class="overline mb-4" v-else>Administrator Login</div>

        <v-divider></v-divider>

        <v-list-item-title
          v-if="!isLoggedIn"
          class="display-1 font-weight-thin mb-1 mt-5"
          >Sign In</v-list-item-title
        >
        <v-list-item-title
          v-else
          class="display-1 font-weight-thin mb-1 mt-5"
          >{{ user.username || "Admin" | capitalize }}</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-center" v-if="isLoggedIn">
      <v-btn color="black" to="/admin">Administrator</v-btn>
    </v-card-actions>

    <v-card-title class="justify-center">
      <v-icon v-if="!isLoggedIn" size="200px">mdi-shield-lock-outline</v-icon>
      <v-icon v-else size="200px">mdi-account</v-icon>
    </v-card-title>

    <v-card-actions class="justify-center mb-5">
      <LoginForm v-if="!isLoggedIn"></LoginForm>
      <LoginForm v-else logout></LoginForm>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";
import { mapGetters } from "vuex";

export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["isLoggedIn", "user"])
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();

      return value
        .split(" ")
        .map(name => {
          return name.charAt(0).toUpperCase() + name.slice(1);
        })
        .join(" ");
    }
  }
};
</script>

<style lang="scss" scoped></style>
