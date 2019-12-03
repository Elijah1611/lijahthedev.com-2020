<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nav>
          <nuxt-link to="/">home</nuxt-link>
          <nuxt-link to="about">about</nuxt-link>
          <nuxt-link to="skills">skills</nuxt-link>
          <nuxt-link to="work">work</nuxt-link>
          <nuxt-link to="connect">connect</nuxt-link>
          <span @click="logOut()" v-if="isLoggedIn()">logout</span>
          <nuxt-link to="login" v-else>login</nuxt-link>
          <nuxt-link to="admin">admin</nuxt-link>
        </nav>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "Vuetify.js"
    };
  },
  methods: {
    async logOut() {
      await firebase.auth().signOut();
      this.$router.push("/login");
    },
    ...mapGetters(["isLoggedIn"])
  },
  mounted() {
    this.$store.dispatch("checkFirebaseAuth");
  }
};
</script>
