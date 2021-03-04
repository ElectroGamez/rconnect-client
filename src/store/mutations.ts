import { MutationTree } from "vuex";
import { ErrorMessage } from "./entities/ErrorMessage";
import { IUser } from "./entities/User";
import { State } from "./state";

/*
  __  __       _        _   _                 
 |  \/  |_   _| |_ __ _| |_(_) ___  _ __  ___ 
 | |\/| | | | | __/ _` | __| |/ _ \| '_ \/ __|
 | |  | | |_| | || (_| | |_| | (_) | | | \__ \
 |_|  |_|\__,_|\__\__,_|\__|_|\___/|_| |_|___/
                                              
*/
export enum MutationTypes {
  SET_LOADING = "SET_LOADING",
  USER_SET = "USER_SET",
  USER_CLEAR = "USER_CLEAR",
  ERROR_ADD = "ERROR_ADD",
  ERROR_REMOVE = "ERROR_REMOVE"
}

export type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
  [MutationTypes.USER_SET](state: S, payload: IUser): void;
  [MutationTypes.USER_CLEAR](state: S): void;
  [MutationTypes.ERROR_ADD](state: S, payload: ErrorMessage): void;
  [MutationTypes.ERROR_REMOVE](state: S, payload: ErrorMessage): void;
};

export const mutations: MutationTree<State> & Mutations = {
  SET_LOADING(state, value) {
    state.loading = value;
  },
  USER_SET(state, user) {
    state.userSession.loggedIn = true;
    state.userSession.user = user;
  },
  USER_CLEAR(state) {
    state.userSession.loggedIn = false;
    state.userSession.user = undefined;
  },
  ERROR_ADD(state, errorMessage) {
    state.app.errors.push(errorMessage);
  },
  ERROR_REMOVE(state, errorMessage) {
    const index = state.app.errors.findIndex(existingError => {
      return existingError.id === errorMessage.id;
    });
    state.app.errors.splice(index, 1);
  }
};
