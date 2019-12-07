<template>
  <div>
    <Toolbar></Toolbar>

    <Projects></Projects>

    <DragBtn></DragBtn>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Toolbar from "@/components/Admin/Toolbar";
import Projects from "@/components/Admin/Project";
import DragBtn from "@/components/Admin/DragBtn";
import BottomNav from "@/components/Footer/BottomNav";

export default {
  middleware: "auth",
  head: {
    title: "Admin"
  },
  components: {
    Projects,
    Toolbar,
    DragBtn,
    BottomNav
  }
};
</script>
