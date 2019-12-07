<template>
  <div class="about-bg">
    <Header :navLinks="links" :headerImage="image"></Header>

    <v-row no-gutters>
      <v-col cols="12">
        <PictureCard></PictureCard>
      </v-col>
      <v-col cols="12">
        <BioCard titleSearch="How I Got"></BioCard>
      </v-col>
      <v-col cols="12">
        <BioCard titleSearch="How About"></BioCard>
      </v-col>
    </v-row>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-sea.jpg";
import Header from "@/components/Header/Header";
import PictureCard from "@/components/About/PictureCard";
import BioCard from "@/components/About/BioCard";
import BottomNav from "@/components/Footer/BottomNav";

export default {
  components: {
    Header,
    PictureCard,
    BioCard,
    BottomNav
  },
  data() {
    return {
      image,
      links: [
        { route: "/work", text: "Work" },
        { route: "/skills", text: "Skills" },
        { route: "/connect", text: "Connect" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about-bg {
  background-image: linear-gradient(to bottom, rgb(0, 0, 0) 20%, #ffffff00),
    url("~assets/images/black-design.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
