<template>
  <v-col cols="12" md="4">
    <nuxt-link :to="`/work/${project.title}`">
      <ParallaxContainer class="parallax-container">
        <ParallaxElement :parallaxStrength="5" type="depth" tag="div">
          <!-- Background Image Container -->
          <header class="header" role="banner" :style="image">
            <!-- Site Title -->
            <h1>{{ project.title }}</h1>
          </header>
        </ParallaxElement>
      </ParallaxContainer>
    </nuxt-link>
  </v-col>
</template>

<script>
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";

export default {
  name: "ProjectCard",
  components: {
    ParallaxContainer,
    ParallaxElement
  },
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      image: `background-image: url('${this.project.image}');`
    };
  }
};
</script>

<style scoped lang="scss">
.parallax-container {
  overflow: hidden;
}

.header {
  height: 500px;
  overflow: hidden;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.01);
  }

  & h1 {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
    font-family: "Gugi", "Segoe UI", Verdana, sans-serif;
    background: linear-gradient(
      to bottom,
      rgba(255, 241, 241, 0),
      rgba(0, 0, 0, 0.699) 90%
    );
    transition: transform 0.5s ease-in-out;
    padding: 15px;

    position: relative;
    overflow: hidden;
  }
}
</style>
