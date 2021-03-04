<template>
  <div class="player-avatar-fallback">
    <div id="avatar-fallback"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PlayerAvatarFallback extends Vue {}
</script>

<style scoped>
.player-avatar-fallback {
  padding: 1ex;
  width: 50px;
  height: 50px;
}

#avatar-fallback {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background-image: url("../../assets/steve.png");
  opacity: 0.3;
}
</style>
