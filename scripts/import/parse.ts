import { GoogleSheet } from "./types";

export function parseGoogleSheet(raw: string): GoogleSheet {
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("Invalid Google response.");
  }

  return JSON.parse(raw.substring(start, end + 1));
}