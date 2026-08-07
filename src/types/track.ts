import { HistoryCategory } from "./history";

export interface TrackTAS {
  time: string;

  saved: string;

  authors: string[];

  date: string;

  video?: string;

  replay?: string;

  inputs?: string;
}

export interface WRRecord {
  time: string;

  authors: string[];

  date: string;
}

export interface Track {
  id: string;

  name?: string;

  tmxId?: number;

  image?: string;

  tas: TrackTAS;

  wr?: WRRecord;

  history?: HistoryCategory[];

  notes?: string;
}