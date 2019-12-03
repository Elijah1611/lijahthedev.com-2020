<template>
  <p>{{ this.$route.path }}</p>
</template>

<script>
export default {
  middleware: "auth",
  components: {}
};
</script>
