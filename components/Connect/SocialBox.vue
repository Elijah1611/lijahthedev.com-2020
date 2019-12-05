<template>
  <ParallaxContainer :animationDuration="1000">
    <ParallaxElement
      :parallaxStrength="8"
      type="depth"
      class="parallax-container"
    >
      <v-card :class="`${colorGradient} mx-auto`" height="400">
        <ParallaxElement
          :parallaxStrength="15"
          type="depth"
          tag="div"
          class="full-height-title"
        >
          <h3 class="display-2 font-weight-bold raised-style-light">
            {{ title }}
          </h3>
        </ParallaxElement>

        <ParallaxElement
          :parallaxStrength="30"
          type="translation"
          class="full-height-icon justify-center align-center"
        >
          <v-card-actions>
            <v-icon class="raised-style" size="250">{{ icon }}</v-icon>
          </v-card-actions>
        </ParallaxElement>
      </v-card>
    </ParallaxElement>
  </ParallaxContainer>
</template>

<script>
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";

export default {
  components: {
    ParallaxContainer,
    ParallaxElement
  },
  props: {
    title: { type: String },
    icon: { type: String },
    color: { type: String }
  },
  computed: {
    colorGradient() {
      return this.color === "green" ? "green-gradient" : "blue-gradient";
    }
  }
};
</script>

<style lang="scss" scoped>
.parallax-container {
  height: 400px;
}

.green-gradient {
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  box-shadow: inset 0 0 30px #000000;
}

.blue-gradient {
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  box-shadow: inset 0 0 30px #000000;
}

.raised-style-light {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

.raised-style {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 0 #a9a9a9, 0 7px 0 #999, 0 8px 0 #898989, 0 9px 0 #888,
    0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15), 10px 10px 25px rgba(0, 0, 0, 0.514);
}

.full-height-title {
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
.full-height-icon {
  display: flex;
  height: 50%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
</style>
