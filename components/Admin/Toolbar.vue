<template>
  <v-toolbar class="fixed-bar">
    <nuxt-link to="/">
      <v-toolbar-title class="admin-title">LijahTheDev.com</v-toolbar-title>
    </nuxt-link>

    <v-spacer></v-spacer>

    <v-btn fab small title="Account" to="/login">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <Add></Add>

    <v-btn fab small title="Save Order" @click="save()">
      <v-icon color="green">mdi-check</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Add from "@/components/Admin/Dialog/Add";
export default {
  name: "Toolbar",
  components: {
    Add
  },
  data() {
    return {
      addActive: true
    };
  },
  methods: {
    save() {
      this.$store.dispatch("saveOrder");
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-title {
  font-family: "Gugi", "Segoe UI", Verdana, sans-serif;
  color: white;
}

.fixed-bar {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
