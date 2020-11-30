import { State, Server } from "./state";
import { MutationTree } from "vuex";

export enum MutationType {
  SetList = "SET_LIST",
  SetLoading = "SET_LOADING",
  SetServer = "SET_SERVER"
}

export type Mutations = {
  [MutationType.SetList](state: State, servers: Server[]): void;
  [MutationType.SetLoading](state: State, loading: boolean): void;
  [MutationType.SetServer](state: State, server: Server): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetList](state, servers) {
    state.serverList = servers;
  },

  [MutationType.SetLoading](state, loading) {
    state.loading = loading;
  },

  [MutationType.SetServer](state, server) {
    state.currentServer = server;
  }
};
