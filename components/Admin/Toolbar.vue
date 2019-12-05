<template>
  <v-toolbar>
    <nuxt-link to="/">
      <v-toolbar-title class="admin-title">
        LijahTheDev.com
      </v-toolbar-title>
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
</style>
