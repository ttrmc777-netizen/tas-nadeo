export interface GoogleCell {
  v?: string | number | boolean;
  f?: string;
}

export interface GoogleRow {
  c: (GoogleCell | null)[];
}

export interface GoogleColumn {
  id: string;
  label: string;
  type: string;
}

export interface GoogleSheet {
  table: {
    cols: GoogleColumn[];
    rows: GoogleRow[];
  };
}