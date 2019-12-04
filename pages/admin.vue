<template>
  <div>
    <Toolbar></Toolbar>

    <Projects></Projects>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Projects from "@/components/Admin/Projects";
import Toolbar from "@/components/Admin/Toolbar";
import BottomNav from "@/components/Footer/BottomNav";

export default {
  middleware: "auth",
  components: {
    Projects,
    Toolbar,
    BottomNav
  }
};
</script>
