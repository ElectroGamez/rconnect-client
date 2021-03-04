import { IPlayer } from "./Player";
import { IPlayerDataPoint } from "./PlayerDataPoint";
import { IServer } from "./Server";

export interface IPlayerDataEntry {
  server: IServer;
  owner: IPlayer;
  id: string;
  time: string;
  dataPoints: IPlayerDataPoint[];
}
