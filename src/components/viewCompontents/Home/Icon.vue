<template>
  <div id="icon"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {}
</script>

<style scoped>
#icon {
  width: 15ex;
  height: 15ex;
  background-color: rgba(255, 255, 255, 0.404);
}
</style>
