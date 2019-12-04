<template>
  <v-container>
    <draggable tag="div" class="row" v-model="projects" handle=".projectCard">
      <v-col
        cols="12"
        sm="6"
        v-for="{ id, project } in projects"
        :key="id"
        class="projectCard"
        :data-id="id"
      >
        <v-card>
          <v-img
            :src="project.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title>{{ project.title }}</v-card-title>
          </v-img>
          <v-card-text>
            <div>
              <v-icon left :color="project.lang.color">mdi-code-tags</v-icon>
              {{ project.lang.name }}
            </div>
            <p class="text--primary">
              {{ project.description }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <Add></Add>

            <Edit :project="project"></Edit>

            <Remove :project="project"></Remove>
          </v-card-actions>
        </v-card>
      </v-col>
    </draggable>
  </v-container>
</template>

<script>
import Add from "@/components/Admin/Dialog/Add";
import Edit from "@/components/Admin/Dialog/Edit";
import Remove from "@/components/Admin/Dialog/Remove";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
    Add,
    Edit,
    Remove
  },
  computed: {
    projects: {
      get() {
        return this.$store.state.projects.projects;
      },
      set(value) {
        this.$store.commit("SET_PROJECTS", value);
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch("saveOrder");
    }
  }
};
</script>
