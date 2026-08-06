import { HistoryCategory } from "./history";

export interface Track {
  id: string;

  name?: string;

  tasTime: string;

  saved: string;

  authors: string[];

  date: string;

  replay: boolean;

  inputs: boolean;

  video?: string | null;

  history?: HistoryCategory[];

  notes?: string;
}