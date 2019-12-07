<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn fab small title="Add Project" v-on="on" class="mx-1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add New Project</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-form v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newProject.title"
                  label="Title"
                  :rules="isRequiredRule('Title')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="newProject.description"
                  label="Description"
                  :rules="isRequiredRule('Description')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-autocomplete
                  v-model="newProject.year"
                  :items="[2021, 2020, 2019, 2018, 2017, 2016, 2015]"
                  label="Year"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newProject.lang.name"
                  label="Language Name"
                  :color="newProject.lang.color"
                  :rules="isRequiredRule('Language Name')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newProject.lang.color"
                  label="Language Color"
                  :color="newProject.lang.color"
                  hint="Hexadecimal Color"
                  persistent-hint
                  :rules="isRequiredRule('Language Color')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="newProject.image"
                  label="Image URL"
                  :rules="isRequiredRule('Image')"
                  required
                ></v-text-field>

                <v-img :src="checkImageURL"></v-img>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="newProject.links.github"
                  label="GitHub URL"
                  :rules="isRequiredRule('GitHub URL')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="newProject.links.site"
                  label="Website URL"
                  :rules="isRequiredRule('Website URL')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="8">
                <v-text-field
                  label="Color"
                  hint="Hexadecimal Color"
                  v-model="newProject.color"
                  persistent-hint
                  :rules="isRequiredRule('Color')"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6" sm="2">
                <v-text-field
                  disabled
                  label="Order"
                  v-model="newProject.order"
                  outlined
                  hint="Zero-based"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6" sm="2">
                <v-switch v-model="newProject.dark" inset label="Dark" color="black"></v-switch>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn :disabled="valid == false" color="blue darken-1" @click="add()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import placeholderImage from "@/assets/images/placeholder-image.png";
import { mapGetters } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      placeholderImage,
      dialog: false,
      valid: false,
      newProject: {
        title: "",
        description: "",
        year: 2019,
        image: "",
        links: {
          github: "",
          site: ""
        },
        lang: {
          name: "",
          color: "#FFFF00"
        },
        dark: false,
        color: "#FFF",
        order: 0
      }
    };
  },
  computed: {
    checkImageURL() {
      const image = this.newProject.image;
      const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

      return urlRegex.test(image) ? image : placeholderImage;
    }
  },
  methods: {
    isRequiredRule(mainText) {
      return [v => !!v || `${mainText} is required`];
    },
    add() {
      this.$store.dispatch("addProject", this.newProject);
    }
  },
  mounted() {
    this.newProject.order = this.$store.getters.projects.length;
  }
};
</script>
