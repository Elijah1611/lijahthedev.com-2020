<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn fab small v-on="on" class="mx-1">
        <v-icon>mdi-close-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline justify-center"
        >Permanently Delete "{{ title }}"?</v-card-title
      >

      <v-col class="text-center">
        <v-icon size="64" color="red">mdi-trash-can-outline</v-icon>
        <v-switch
          v-model="deleteSwitch"
          append-icon="mdi-power-on"
          prepend-icon="mdi-power-off"
          class="justify-center"
          color="red"
        ></v-switch>
      </v-col>
      <v-card-actions>
        <v-btn color="green" @click="dialog = false">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="initDestory()"
          color="red darken-1"
          :disabled="!deleteSwitch"
          >Destory</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: { type: String },
    id: { type: String }
  },
  data() {
    return {
      dialog: false,
      deleteSwitch: false
    };
  },
  methods: {
    initDestory() {
      this.dialog = false;
      if (this.deleteSwitch) this.$store.dispatch("deleteProject", this.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
