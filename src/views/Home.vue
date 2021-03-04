<template>
  <div class="home">
    <ErrorList />
    <PlayerList />

    <div>
      <!-- Dev stuff -->

      <button @click="addError">Add Error</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import PlayerList from "@/components/Home/PlayerList.vue";
import ErrorList from "@/components/Error/ErrorList.vue";
import { ActionTypes } from "@/store/actions";

@Options({
  components: {
    PlayerList,
    ErrorList
  }
})
export default class Home extends Vue {
  addError() {
    this.$store.dispatch(ActionTypes.ERROR_ADD, {
      type: "warning",
      title: "Connection Error! Big boi error here!",
      text: "oopsie woobsie, we did a fooky wooky UwU",
      fixed: false
    });
  }
}
</script>

<style scoped>
.error-list {
  position: absolute;
  top: 0;
  right: 4px;
}
</style>
