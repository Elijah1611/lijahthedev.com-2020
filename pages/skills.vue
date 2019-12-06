<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>

    <v-row :no-gutters="this.$vuetify.breakpoint.smAndDown">
      <v-col v-for="skill of skills" :key="skill.id" cols="12" md="4">
        <SkillCard
          :title="skill.title"
          :icon="skill.icon"
          :givenColor="skill.color"
        ></SkillCard>
      </v-col>
    </v-row>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-abstract.jpg";
import Header from "@/components/Header/Header";
import SkillCard from "@/components/Skills/SkillCard";
import BottomNav from "@/components/Footer/BottomNav";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    SkillCard,
    BottomNav
  },
  data() {
    return {
      image,
      links: [
        { route: "/work", text: "Work" },
        { route: "/about", text: "About" },
        { route: "/connect", text: "Connect" }
      ]
    };
  },
  computed: {
    ...mapGetters(["skills"])
  }
};
</script>
