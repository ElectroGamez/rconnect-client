import { IUser } from "./entities/User";

import { ErrorMessage } from "@/store/entities/ErrorMessage";

/*
  ____  _        _       
 / ___|| |_ __ _| |_ ___ 
 \___ \| __/ _` | __/ _ \
  ___) | || (_| | ||  __/
 |____/ \__\__,_|\__\___|
                         
*/
export const state: State = {
  loading: false,
  userSession: {
    loggedIn: false
  },
  app: {
    errors: [],
    errorIndex: 0
  }
};

export type State = {
  loading: boolean;
  userSession: {
    loggedIn: boolean;
    user?: IUser;
  };
  app: {
    errors: ErrorMessage[];
    errorIndex: number;
  };
};
