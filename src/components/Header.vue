<template>
  <div id="header">
    <Logo />
  </div>
</template>

<script lang="ts">
import Options from "vue-class-component";
import Logo from "@/components/Logo.vue";
import Vue from "vue";

@Options({
  components: {
    Logo
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
#header {
  display: flex;
  width: 100%;
  background-color: #1d1d1d;
  padding: 1ex;
}
</style>
