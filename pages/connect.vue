<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>

    <v-row :no-gutters="this.$vuetify.breakpoint.smAndDown">
      <v-col>
        <a :href="github" target="_blank">
          <SocialBox
            title="GitHub"
            icon="mdi-github-circle"
            color="green"
          ></SocialBox>
        </a>
      </v-col>

      <v-col>
        <a :href="linkedin" target="_blank">
          <SocialBox
            title="LinkedIn"
            icon="mdi-linkedin-box"
            color="blue"
          ></SocialBox>
        </a>
      </v-col>
    </v-row>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-sand.jpg";
import Header from "@/components/Header/Header";
import SocialBox from "@/components/Connect/SocialBox";
import BottomNav from "@/components/Footer/BottomNav";

export default {
  head: {
    title: "Connect"
  },
  components: {
    Header,
    SocialBox,
    BottomNav
  },
  data() {
    return {
      image,
      github: "https://github.com/LijahTheDev",
      linkedin: "https://www.linkedin.com/in/lijahthedev/",
      links: [
        { route: "/work", text: "Work" },
        { route: "/about", text: "About" },
        { route: "/skills", text: "Skills" }
      ]
    };
  }
};
</script>
