/*
   ____      _   _                
  / ___| ___| |_| |_ ___ _ __ ___ 
 | |  _ / _ \ __| __/ _ \ '__/ __|
 | |_| |  __/ |_| ||  __/ |  \__ \
  \____|\___|\__|\__\___|_|  |___/
                                  
*/

import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  incrementalErrorIndex(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  incrementalErrorIndex(state) {
    state.app.errorIndex++;
    return state.app.errorIndex;
  }
};
