import { GoogleSheet } from "./types";
import { ImportedTrack } from "./parseTracks";
import { HistoryCategory } from "@/types/history";

function formatGoogleDate(value: string): string {
  const match = value.match(/Date\((\d+),(\d+),(\d+)\)/);

  if (!match) {
    return value;
  }

  const year = Number(match[1]);
  const month = Number(match[2]) + 1;
  const day = Number(match[3]);

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function parseHistory(
  sheet: GoogleSheet,
  tracks: ImportedTrack[]
): Record<string, HistoryCategory[]> {
  const result: Record<string, HistoryCategory[]> = {};

  for (let trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    const track = tracks[trackIndex];

    // كل مسار يشغل 9 أعمدة، ويبدأ أول مسار من العمود 9
    const start = 9 + trackIndex * 9;

    const categories: HistoryCategory[] = [];
    const map = new Map<string, HistoryCategory>();

    for (const row of sheet.table.rows) {
      const category = row.c[start]?.v?.toString().trim() ?? "";
      const record = row.c[start + 1]?.v?.toString().trim() ?? "";
      const authors = row.c[start + 2]?.v?.toString().trim() ?? "";
      const date = row.c[start + 3]?.v?.toString().trim() ?? "";

      if (!category || !record) {
        continue;
      }

      if (!map.has(category)) {
        map.set(category, {
          name: category,
          entries: [],
        });
      }

      map.get(category)!.entries.push({
        record,
        authors: authors
          .split("+")
          .map((author) => author.trim())
          .filter(Boolean),
        date: formatGoogleDate(date),
      });
    }

    result[track.id] = [...map.values()];
  }

  return result;
}