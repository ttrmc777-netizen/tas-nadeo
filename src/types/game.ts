import { Track } from "./track";

export interface Game {
  id: string;
  name: string;

  tracks: Track[];
}