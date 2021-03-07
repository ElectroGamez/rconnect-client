<template>
  <div class="player-list">
    <div id="player-list-header">
      <IconHeader :icon="chartBar" :title="title" :subtitle="subtitle" />
    </div>
    <div id="player-list-cards">
      <p id="player-list-cards-header">Top 5 miners</p>
      <PlayerCard
        v-for="(player, index) in players"
        :key="index"
        :player="player"
        :header="`#${index + 1}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import PlayerCard from "./PlayerCard.vue";

import IconHeader from "@/components/IconHeader.vue";

import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { IPlayer } from "@/store/entities/Player";
import { ActionTypes } from "@/store/actions";

interface PlayTimeList {
  data: number;
  linkedEntry: {
    id: string;
    time: string;
    owner: IPlayer;
  };
  id: string;
}

@Options({
  components: {
    IconHeader,
    PlayerCard
  }
})
export default class PlayerList extends Vue {
  playTimeList: PlayTimeList[] = new Array(5);

  get chartBar() {
    return faChartBar;
  }

  get title() {
    return process.env.VUE_APP_TITLE;
  }

  get subtitle() {
    return process.env.VUE_APP_SUB_TITLE;
  }

  get players() {
    return this.playTimeList.map(object => {
      return object?.linkedEntry?.owner;
    });
  }

  async getList(): Promise<PlayTimeList[]> {
    const result = await fetch(`${this.$baseURL}player/top/5`);

    if (result.ok) {
      return await result.json();
    } else {
      this.$store.dispatch(ActionTypes.ERROR_ADD, {
        type: "error",
        title: "Connection Error",
        text: result.statusText,
        fixed: true
      });
      return [];
    }
  }

  async mounted() {
    this.playTimeList = await this.getList();
  }
}
</script>

<style scoped>
.player-list {
  display: inline-block;
  min-width: 35ex;
}

#player-list-header {
  padding: 2ex 0ex 2ex 2ex;
  border-bottom: 1px solid #6b98db;
  background-color: #035ae1;
  border-radius: 8px 8px 0 0;
}

#player-list-cards {
  background-color: #0064fe;
  padding: 2ex;
  border-radius: 0px 0px 8px 8px;
}

#player-list-cards-header {
  margin: 0 0 2ex 0;
  color: white;
  font-size: 160%;
}

.player-card {
  color: white;
}
</style>
