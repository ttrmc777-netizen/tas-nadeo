import fs from "fs/promises";
import path from "path";

import { SHEETS } from "./config";
import { fetchSheet } from "./fetch";
import { parseGoogleSheet } from "./parse";

import { parseTracks } from "./parseTracks";
import { parseHistory } from "./parseHistory";

import { writeHistory } from "./writeHistory";

async function main() {
  console.log("Downloading TMNF...");

  // تحميل صفحة TMNF
  const rawTracks = await fetchSheet(SHEETS.TMNF);
  const trackSheet = parseGoogleSheet(rawTracks);

  // ===========================
// DEBUG: عرض أول 8 صفوف من A01
// ===========================

const startIndex = trackSheet.table.rows.findIndex((row) => {
  return row.c[2]?.v?.toString() === "A01";
});

if (startIndex !== -1) {
  console.log("");
  console.log("========== A01 BLOCK ==========");

  for (
    let i = startIndex;
    i < Math.min(startIndex + 8, trackSheet.table.rows.length);
    i++
  ) {
    console.log(`ROW ${i}`);

    trackSheet.table.rows[i].c.forEach((cell, index) => {
      console.log(index, cell?.v ?? "");
    });

    console.log("----------------------------");
  }

  console.log("=============================");
}

  // استخراج المسارات
  const tracks = parseTracks(trackSheet);

  // حفظ tracks.json
  await fs.writeFile(
    path.join(
      process.cwd(),
      "data",
      "tmnf",
      "tracks.json"
    ),
    JSON.stringify(tracks, null, 2)
  );

  console.log(`✓ Imported ${tracks.length} tracks`);

  console.log("Downloading TMNF History...");

  // تحميل صفحة History
  const rawHistory = await fetchSheet(SHEETS.TMNF_HISTORY);
  const historySheet = parseGoogleSheet(rawHistory);

  // استخراج التاريخ
  const history = parseHistory(historySheet, tracks);

  // حفظ ملفات التاريخ
  await writeHistory("tmnf", history);

  console.log(
    `✓ Imported ${Object.keys(history).length} history files`
  );

  console.log("Done.");
}

main().catch(console.error);