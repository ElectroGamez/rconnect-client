import { IServer } from "./Server";
import { IServerDataPoint } from "./ServerDataPoint";

export interface IServerDataEntry {
  server: IServer;
  dataPoints: IServerDataPoint[];
}
