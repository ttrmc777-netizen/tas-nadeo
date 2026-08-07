export const SHEET_ID =
  "1R1N4mQkRyQemJgDAGh54v9_n4fLW4Z3EGp71xrIBRIY";

export const SHEETS = {
  TMNF: 0,
  TMNF_HISTORY: 97926325,

  TMUF: 1059470523,

  ESWC: 2116063048,

  REMAKES: 1671456981,

  STARTRACK: 519542164,

  TMO: 2110513883,

  TMS: 725585106,

  TM2: 50368096,

  DEMO: 225359388,
};

export function getSheetUrl(gid: number) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${gid}&tqx=out:json`;
}