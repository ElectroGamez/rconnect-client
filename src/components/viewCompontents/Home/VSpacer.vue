<template>
  <div id="vspacer" v-bind:style="{ height: height }"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VSpacer extends Vue {
  @Prop() private height!: string;
}
</script>

<style scoped>
#vspacer {
  height: 1px;
}
</style>
