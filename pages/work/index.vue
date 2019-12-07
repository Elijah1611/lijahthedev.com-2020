<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>

    <v-row no-gutters>
      <ProjectCard
        v-for="project of projects"
        :key="project.id"
        :project="project.project"
      ></ProjectCard>
    </v-row>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-mount.jpg";
import Header from "@/components/Header/Header";
import ProjectCard from "@/components/Projects/ProjectCard";
import BottomNav from "@/components/Footer/BottomNav";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    ProjectCard,
    BottomNav
  },
  data() {
    return {
      image,
      links: [
        { route: "/about", text: "About" },
        { route: "/skills", text: "Skills" },
        { route: "/connect", text: "Connect" }
      ]
    };
  },
  computed: {
    ...mapGetters(["projects"])
  }
};
</script>
