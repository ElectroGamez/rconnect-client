export type Server = {
  id: string;
  name: string;
  description: string | null;
  ipAddress: string;
  port: number;
};

export type State = {
  loading: boolean;
  serverList: Server[];
  currentServer: Server | null;
};

export const state: State = {
  loading: false,
  serverList: [],
  currentServer: null
};
