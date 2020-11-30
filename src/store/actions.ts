import { AxiosInstance } from "axios";
import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetServerList = "GET_SERVERS"
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetServerList](
    context: ActionAugments,
    payload: { axios: AxiosInstance }
  ): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetServerList]({ commit }, payload) {
    commit(MutationType.SetLoading, true);

    try {
      // Get List from backend
      const response = await payload.axios.get("/server");
      commit(MutationType.SetList, response.data ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      commit(MutationType.SetLoading, false);
    }
  }
};
