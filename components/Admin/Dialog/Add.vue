<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn fab small v-on="on" class="mx-1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add New Project</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Title" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Description" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-autocomplete
                :items="[2021, 2020, 2019, 2018, 2017, 2016, 2015]"
                label="Year"
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field label="Language Name" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Language Color"
                hint="Hexadecimal Color"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="newProject.image"
                label="Image URL"
                required
              ></v-text-field>

              <v-img
                :src="newProject.image ? newProject.image : placeholderImage"
              ></v-img>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Github URL" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Website URL" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="8">
              <v-text-field
                label="Color"
                hint="Hexadecimal Color"
                value="#FFF"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="2">
              <v-text-field
                disabled
                label="Order"
                :value="projects.length + 1"
                outlined
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" sm="2">
              <v-switch
                v-model="newProject.dark"
                inset
                label="Dark"
                color="black"
              ></v-switch>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import placeholderImage from "@/assets/images/placeholder-image.png";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      placeholderImage,
      dialog: false,
      newProject: {
        image: "",
        dark: false
      }
    };
  },
  computed: {
    ...mapGetters(["projects"])
  }
};
</script>
