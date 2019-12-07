<template>
  <div class="bg">
    <v-row>
      <v-col cols="12" md="8">
        <ParallaxContainer class="zoom">
          <ParallaxElement :parallaxStrength="5" type="depth">
            <a :href="project.links.site" target="_blank">
              <v-card max-width="900px">
                <v-img :src="project.image" alt="Project Photo" class="white--text align-end">
                  <v-card-title>
                    <v-icon>mdi-monitor-dashboard</v-icon>
                    <v-icon>mdi-arrow-right-bold-outline</v-icon>
                  </v-card-title>
                </v-img>
              </v-card>
            </a>
          </ParallaxElement>
        </ParallaxContainer>
      </v-col>

      <v-col class="12" md="4">
        <ParallaxContainer>
          <v-card class="text-center" :color="project.lang.color">
            <ParallaxElement :parallaxStrength="15" type="rotation">
              <v-icon class="raised-style" size="220">{{ project.lang.icon }}</v-icon>
            </ParallaxElement>

            <div class="raised-style size-up font-weight-bold">{{ project.lang.name }}</div>
          </v-card>
        </ParallaxContainer>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mx-auto" cols="12" md="8">
        <v-card class="mx-auto pa-8 title-color text--primary">
          <v-card-text>
            <div class="font-weight-thin title text--primary">{{ project.year }}</div>

            <v-card-title class="display-1 text--primary">{{ project.title }}</v-card-title>

            <v-card-text class="title text--primary">{{ project.description }}</v-card-text>

            <v-card-text
              v-for="(paragraph, i) of project.longDescription"
              :key="i"
              class="title text--primary"
            >{{ paragraph }}</v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from "@/components/Footer/BottomNav";
import { mapGetters } from "vuex";
import { ParallaxContainer, ParallaxElement } from "vue-mouse-parallax";
import { error } from "util";

export default {
  head() {
    return {
      titleTemplate: `${this.$route.params.project} | %s`
    };
  },
  components: {
    BottomNav,
    ParallaxContainer,
    ParallaxElement
  },
  computed: {
    ...mapGetters(["projects"]),
    project() {
      return this.projects.find(p => {
        return p.project.title.includes(this.$route.params.project);
      }).project;
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: url("~assets/images/black-abstract.jpg");
}

.zoom:hover {
  i {
    transition: all 0.7s cubic-bezier(0.16, 1.6, 0.9, -0.72);
    font-size: 42px;
  }
}

.title-color {
  text-shadow: 0 0 8px #000;
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
}

.size-up {
  font-size: 52px;
}

.raised-style {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
</style>
