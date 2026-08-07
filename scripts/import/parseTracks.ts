import { GoogleSheet } from "./types";
import { Track } from "@/types/track";

export function parseTracks(sheet: GoogleSheet): Track[] {
  const tracks: Track[] = [];

  for (const row of sheet.table.rows) {
    const cells = row.c;

    const id = cells[2]?.v?.toString() ?? "";

    // نتأكد أن الصف يمثل مسارًا
    if (!/^[A-Z]\d{2}$/.test(id)) {
      continue;
    }

    tracks.push({
      id,

      name: undefined,

      tmxId: undefined,

      image: undefined,

      tas: {
        time: cells[3]?.v?.toString() ?? "",

        saved: cells[4]?.v?.toString() ?? "",

        authors:
          cells[5]?.v
            ?.toString()
            .split("+")
            .map((author) => author.trim()) ?? [],

        date: cells[6]?.v?.toString() ?? "",

        video: undefined,

        replay: undefined,

        inputs: undefined,
      },

      wr: undefined,

      history: [],

      notes: undefined,
    });
  }

  return tracks;
}