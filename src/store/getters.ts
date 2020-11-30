import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  totalCount(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  totalCount(state) {
    return state.serverList.length;
  }
};
