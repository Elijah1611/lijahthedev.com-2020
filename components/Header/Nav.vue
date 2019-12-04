<template>
  <!-- Navigation -->
  <nav :class="['nav', navType]">
    <nuxt-link v-for="(link, i) in links" :key="i" :to="link.route">
      {{
      link.text
      }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    },
    navType: {
      type: String,
      default: "horizontal-nav"
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: relative;
  z-index: 1;

  .router-link-exact-active {
    background: rgba(255, 255, 255, 0.1);
  }

  & a {
    font-family: "Gugi", "Segoe UI", Verdana, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #fff;
    padding: 1.5rem;
    transition: all 0.3s;
  }

  & a:hover {
    background: rgba(255, 255, 255, 0.2);
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc;
  }
  & a:active {
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee;
  }
}

.vertical-nav {
  flex-direction: column;

  & a {
    width: 0;
  }

  & a:hover {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    & a:hover {
      width: 30%;
    }
  }
}

.horizontal-nav {
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 2s;

  & a {
    width: 100%;
    text-align: center;
  }
}

// Tablets & Large Screens
@media (min-width: 768px) {
  .site-title {
    font-size: 2rem;
  }
  .nav a {
    font-size: 1.4rem;
  }
}

// Landscape Mode
@media (max-height: 767px) and (orientation: landscape) {
  .site-title {
    font-size: 1.4rem;
  }
  .nav a {
    font-size: 0.9rem;
  }
}
</style>
