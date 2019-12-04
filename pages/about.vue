<template>
  <div>
    <Header :navLinks="links" :headerImage="image"></Header>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import image from "@/assets/images/black-sea.jpg";
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
        { route: "/skills", text: "Skills" },
        { route: "/connect", text: "Connect" }
      ]
    };
  }
};
</script>
