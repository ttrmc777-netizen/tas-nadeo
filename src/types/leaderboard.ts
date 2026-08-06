import { Taser } from "./taser";

export interface Leaderboard {
  updated: string;

  tasers: Taser[];
}