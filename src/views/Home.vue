<template>
  <div id="home">
    <VSpacer height="5ex" />
    <SearchPlayer />
    <VSpacer height="8ex" />
    <SearchServer />
  </div>
</template>

<script lang="ts">
import Options from "vue-class-component";
import SearchPlayer from "@/components/viewCompontents/Home/SearchPlayer.vue";
import VSpacer from "@/components/viewCompontents/Home/VSpacer.vue";
import SearchServer from "@/components/viewCompontents/Home/SearchServer.vue";

import Vue from "vue";

@Options({
  components: {
    SearchPlayer,
    VSpacer,
    SearchServer
  }
})
export default class Home extends Vue {}
</script>
