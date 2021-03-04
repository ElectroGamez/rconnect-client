<template>
  <div class="player-card">
    <PlayerAvatar v-if="player" :player="player" />
    <PlayerAvatarFallback v-if="!player" />
    <div id="player-name-wrapper">
      <div v-if="player">
        <p id="player-name-header">{{ headerText }}</p>
        <p id="player-name">{{ username }}</p>
      </div>
      <div v-if="!player">
        <Loading />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { IPlayer } from "@/store/entities/Player";

import PlayerAvatar from "./PlayerAvatar.vue";
import PlayerAvatarFallback from "./PlayerAvatarFallback.vue";

import Loading from "@/components/Loading.vue";

@Options({
  props: {
    player: {} as IPlayer,
    header: ""
  },
  components: {
    PlayerAvatar,
    PlayerAvatarFallback,
    Loading
  }
})
export default class PlayerCard extends Vue {
  player!: IPlayer;
  header!: string;

  get username() {
    return this.player?.username ?? "";
  }

  get headerText() {
    return this.header ?? "";
  }

  async mounted() {
    if (this.player && !this.player.username) {
      const response = await this.$axios.get(
        `player/id/${this.player.id}/username`
      );

      this.player.username = response?.data.username ?? undefined;
    }
  }
}
</script>

<style scoped>
.player-card {
  background-color: white;
  width: 55ex;
  display: grid;
  grid-template-columns: min-content auto;
  border-radius: 7px;
  margin: 1ex 0;
}

.player-avatar,
.player-avatar-fallback {
  height: 70px;
  width: 70px;
}

#player-name-wrapper {
  position: relative;
  margin: auto 12px auto 12px;
  font-size: 125%;
  text-align: right;
}

#player-name-wrapper * {
  color: black;
  margin: 0;
}

#player-name-header {
  font-weight: bold;
}
</style>
