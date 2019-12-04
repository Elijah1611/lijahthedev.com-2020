<template>
  <v-bottom-navigation v-model="active">
    <v-btn
      v-for="(link, i) in navLinks"
      :key="i"
      :value="link.value"
      :to="link.route"
    >
      <span>{{ link.title }}</span>
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
    <v-btn v-if="isLoggedIn" value="admin" to="/admin">
      <span>Admin</span>
      <v-icon>mdi-console-line</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: this.$route.path.substring(1),
      navLinks: [
        { title: "Work", route: "/work", value: "work", icon: "mdi-briefcase" },
        {
          title: "About",
          route: "/about",
          value: "about",
          icon: "mdi-account-card-details-outline"
        },
        {
          title: "Skills",
          route: "/skills",
          value: "skills",
          icon: "mdi-poll"
        },
        {
          title: "Connect",
          route: "/connect",
          value: "connect",
          icon: "mdi-lan-connect"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
