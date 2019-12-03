<template>
  <v-card class="mx-auto" max-width="500">
    <v-row>
      <v-col class="text-center">
        <v-icon size="92" color="red">mdi-server-remove</v-icon>
        <h1>{{ errorType }}{{ error.statusCode }}</h1>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon>mdi-file-remove</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Why? - {{ reason }}</v-list-item-title>
          <v-list-item-subtitle>{{
            Date.now() | moment("MMMM Do YYYY - h:mm:ss A")
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions class="d-flex justify-center">
      <NuxtLink to="/">
        <v-btn class="px-5"> <v-icon>mdi-home-roof</v-icon>Home </v-btn>
      </NuxtLink>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["error"],
  computed: {
    errorType() {
      if (/5.\d/.test(this.error.statusCode)) {
        return "Server Error: ";
      } else if (/4.\d/.test(this.error.statusCode)) {
        return "Client Error: ";
      } else {
        return "Error: ";
      }
    },
    reason() {
      if (this.error.message) {
        return `${this.error.message}! 😱`;
      } else if (/5.\d/.test(this.error.statusCode)) {
        return "Server Error: " + this.error.message;
      } else {
        return "Bad Request: Check errors & the response.";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
