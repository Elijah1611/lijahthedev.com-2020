<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-abstract.jpg";
import Header from "@/components/Header/Header";
import BottomNav from "@/components/Footer/BottomNav";

export default {
  components: {
    Header,
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
  }
};
</script>