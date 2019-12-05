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
              <span>{{ project.lang.name }}</span>
            </div>

            <p class="text--primary">
              {{ project.description }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <Edit :project="{ id: id, ...project }"></Edit>

            <Remove :title="project.title" :id="id"></Remove>
          </v-card-actions>
        </v-card>
      </v-col>
    </draggable>
  </v-container>
</template>

<script>
import Edit from "@/components/Admin/Dialog/Edit";
import Remove from "@/components/Admin/Dialog/Remove";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
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
  }
};
</script>
