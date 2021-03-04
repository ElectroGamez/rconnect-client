import {
  CommitOptions,
  createStore,
  DispatchOptions,
  Store as VuexStore
} from "vuex";

import { Actions, actions, ActionTypes } from "./actions";
import { Getters, getters } from "./getters";
import { Mutations, mutations, MutationTypes } from "./mutations";
import { State, state } from "./state";

/*
  ____  _                 
 / ___|| |_ ___  _ __ ___ 
 \___ \| __/ _ \| '__/ _ \
  ___) | || (_) | | |  __/
 |____/ \__\___/|_|  \___|
                          
*/
export const store = createStore({
  state,
  getters,
  mutations,
  actions
});

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends MutationTypes, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends ActionTypes, P extends Parameters<Actions[K]>[1]>(
    key: K,
    payload: P,
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
