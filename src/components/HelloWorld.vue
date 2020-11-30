<template>
  <div class="hello">
    <button @click="doStuff">ClickMe</button>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { ActionTypes } from "@/store/actions";
import { MutationType } from "@/store/mutations";
import { Server } from "@/store/state";
import { Component, Prop, Vue } from "vue-property-decorator";

import { axiosInstance } from "../axios";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private servers: Server[] = [];

  async created() {
    const store = useStore();
    await store.dispatch(ActionTypes.GetServerList, { axios: axiosInstance });
    this.servers = store.state.serverList;
  }

  doStuff(e: Event): void {
    const store = useStore();

    e.preventDefault();

    store.commit(MutationType.SetLoading, !store.state.loading);
  }
}
</script>
