<template>
  <v-card class="mx-auto" max-width="500px">
    <div class="d-flex white--text align-end black-gradient">
      <v-card-title>Full Stack Software Developer</v-card-title>
    </div>

    <div class="blue-gradient">Dallas-Fort Worth, TX</div>
  </v-card>
</template>

<script>
export default {
  name: "PictureCard"
};
</script>

<style lang="scss" scoped>
.black-gradient {
  margin-top: 20px;
  background-color: #000000;
}

.blue-gradient {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
}
</style>
