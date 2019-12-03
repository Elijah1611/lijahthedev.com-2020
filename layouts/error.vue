<template>
  <v-app dark>
    <v-container>
      <ErrorCard :error="error" />
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorCard from "~/components/Error/ErrorCard";

export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    ErrorCard
  },
  head() {
    const title = `Error: ${this.error.statusCode}`;

    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
