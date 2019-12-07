<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn fab small v-on="on" class="mx-1">
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit "{{ modifiedProject.title }}"</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="modifiedProject.title" label="Title" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="modifiedProject.description" label="Description" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-autocomplete
                :value="modifiedProject.year"
                :items="[2021, 2020, 2019, 2018, 2017, 2016, 2015]"
                label="Year"
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="modifiedProject.lang.name" label="Language Name" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="modifiedProject.lang.color"
                label="Language Color"
                hint="Hexadecimal Color"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="modifiedProject.image" label="Image URL" required></v-text-field>

              <v-img
                :src="
                  modifiedProject.image
                    ? modifiedProject.image
                    : placeholderImage
                "
              ></v-img>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Github URL" v-model="modifiedProject.links.github" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Website URL" v-model="modifiedProject.links.site" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="8">
              <v-text-field
                v-model="modifiedProject.color"
                label="Color"
                hint="Hexadecimal Color"
                value="#FFF"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="2">
              <v-text-field disabled label="Order" :value="projects.length" outlined required></v-text-field>
            </v-col>

            <v-col cols="6" sm="2">
              <v-switch v-model="modifiedProject.dark" inset label="Dark" color="black"></v-switch>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" @click="edit()">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import placeholderImage from "@/assets/images/placeholder-image.png";
import { mapGetters } from "vuex";

export default {
  name: "Edit",
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      placeholderImage,
      dialog: false,
      modifiedProject: { ...this.project }
    };
  },
  computed: {
    ...mapGetters(["projects"])
  },
  methods: {
    edit() {
      this.dialog = false;

      this.$store.dispatch("editProject", {
        id: this.project.id,
        update: this.modifiedProject,
        current: { ...this.project }
      });
    }
  }
};
</script>
