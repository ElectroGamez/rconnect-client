<template>
  <div class="player-avatar">
    <div
      id="avatar"
      v-bind:style="{ backgroundImage: `url(${backgroundUrl})` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { IPlayer } from "@/store/entities/Player";

@Options({
  props: {
    player: {} as IPlayer
  }
})
export default class PlayerAvatar extends Vue {
  player!: IPlayer;

  get backgroundUrl() {
    return `http://crafatar.com/avatars/${this.player.uuid}`;
  }
}
</script>

<style scoped>
.player-avatar {
  padding: 1ex;
  width: 50px;
  height: 50px;
}

#avatar {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 7px;
}
</style>
