import { IUser } from "./User";

export interface IServer {
  id: string;
  name: string;
  description?: string;
  owner: IUser;
  ipAddress: string;
  port: number;
}
