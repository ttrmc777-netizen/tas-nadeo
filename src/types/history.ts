export interface HistoryEntry {
  record: string;

  authors: string[];

  date: string;

  links?: string[];
}

export interface HistoryCategory {
  name: string;

  entries: HistoryEntry[];
}