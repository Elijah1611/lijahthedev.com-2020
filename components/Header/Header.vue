<template>
  <ParallaxContainer>
    <ParallaxElement :parallaxStrength="7" type="depth" tag="div">
      <!-- Background Image Container -->
      <header class="header" role="banner" :style="image">
        <!-- Site Title -->
        <div class="site-title">
          <nuxt-link to="/">
            <h1>{{ headerTitle }}</h1>
          </nuxt-link>
        </div>

        <!-- Header Nav -->
        <Header-Nav :links="navLinks" :navType="navType"></Header-Nav>
      </header>
    </ParallaxElement>
  </ParallaxContainer>
</template>

<script>
import HeaderNav from "@/components/Header/Nav";
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";

export default {
  name: "Header",
  components: {
    HeaderNav,
    ParallaxContainer,
    ParallaxElement
  },
  props: {
    navLinks: {
      type: Array,
      required: true
    },
    navType: {
      type: String,
      default: "horizontal-nav"
    },
    headerImage: {
      type: String,
      required: true
    },
    headerTitle: {
      type: String,
      default: "LijahTheDev"
    }
  },
  data() {
    return {
      image: `background-image: url('${this.headerImage}');`
    };
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
}

.site-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  position: relative;
  z-index: 1;
  & h1 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: "Bungee Shade", "Segoe UI", Verdana, sans-serif;
    user-select: none;
  }

  a {
    transition: transform 0.5s ease-in-out;
    padding: 15px;

    position: relative;
    overflow: hidden;

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }

  a:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
}
</style>
