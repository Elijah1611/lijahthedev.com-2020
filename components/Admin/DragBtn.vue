<template>
  <v-btn
    @click="toggleDrag"
    fixed
    dark
    fab
    bottom
    right
    :color="(draggableOn) ? 'red' : 'grey darken-3'"
  >
    <v-icon>mdi-drag-variant</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DragBtn",
  computed: {
    ...mapGetters(["draggableOn"])
  },
  methods: {
    toggleDrag() {
      this.$store.commit("SET_DRAG", !this.draggableOn);
    }
  }
};
</script>