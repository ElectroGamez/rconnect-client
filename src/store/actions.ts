import { ActionContext, ActionTree } from "vuex";
import { ErrorMessage } from "./entities/ErrorMessage";
import { IUser } from "./entities/User";
import { Getters } from "./getters";
import { Mutations, MutationTypes } from "./mutations";
import { State } from "./state";

type AugmentedActionContext = {
  commit<K extends MutationTypes>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & Omit<ActionContext<State, State>, "commit" | "getters">;

/*
     _        _   _                 
    / \   ___| |_(_) ___  _ __  ___ 
   / _ \ / __| __| |/ _ \| '_ \/ __|
  / ___ \ (__| |_| | (_) | | | \__ \
 /_/   \_\___|\__|_|\___/|_| |_|___/
                                    
*/

export enum ActionTypes {
  USER_LOGIN = "USER_LOGIN",
  ERROR_ADD = "ERROR_ADD"
}

export interface Actions {
  [ActionTypes.USER_LOGIN](
    { commit }: AugmentedActionContext,
    payload: { email: string; password: string }
  ): Promise<boolean>;
  [ActionTypes.ERROR_ADD](
    { commit }: AugmentedActionContext,
    payload: Omit<ErrorMessage, "id" | "disappearTime"> &
      Partial<Pick<ErrorMessage, "id" | "disappearTime">>
  ): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.USER_LOGIN]({ commit }, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        // TODO: create actual login function
        console.log("Logging in user: ", payload);
        const user: IUser = { id: "tmp-id", name: "tmp-username" };
        commit(MutationTypes.USER_SET, user);
        resolve(true);
      });
    });
  },
  [ActionTypes.ERROR_ADD]({ commit, getters }, payload) {
    return new Promise(resolve => {
      payload.id = getters.incrementalErrorIndex;
      commit(MutationTypes.ERROR_ADD, payload as ErrorMessage);
      if (!payload.fixed)
        setTimeout(() => {
          commit(MutationTypes.ERROR_REMOVE, payload as ErrorMessage);
        }, payload.disappearTime ?? 5000);
      resolve();
    });
  }
};
