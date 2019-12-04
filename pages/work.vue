<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-mount.jpg";
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
        { route: "/about", text: "About" },
        { route: "/skills", text: "Skills" },
        { route: "/connect", text: "Connect" }
      ]
    };
  }
};
</script>