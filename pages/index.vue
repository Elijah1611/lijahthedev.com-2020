<template>
  <Header :navLinks="links" navType="vertical-nav" :headerImage="image"></Header>
</template>

<script>
import Header from "@/components/Header/Header";
import image from "@/assets/images/black-design.jpg";

export default {
  head: {
    title: "LijahTheDev"
  },
  components: {
    Header
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
  }
};
</script>
