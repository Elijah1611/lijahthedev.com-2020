<template>
  <div>
    <v-card class="mx-auto bg-gradient pa-10" max-width="800px">
      <div class="d-flex white--text align-end black-gradient">
        <v-card-text class="font-weight-thin title gugi-font">{{
          getRightBio(titleSearch).title
        }}</v-card-text>
      </div>

      <v-card-text
        class="body-1"
        v-for="(paragraph, i) of getRightBio(titleSearch).text"
        :key="i"
      >
        {{ paragraph }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    titleSearch: { type: String }
  },
  computed: {
    ...mapGetters(["bios"])
  },
  methods: {
    getRightBio(title) {
      return this.bios.find(bio => bio.title.includes(title));
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-gradient {
  background-color: #2876f9;
  background-image: linear-gradient(315deg, #2876f9 0%, #6d17cb 74%);
}

.gugi-font {
  font-family: "Gugi", "Roboto", Verdana, sans-serif !important;
}
</style>
