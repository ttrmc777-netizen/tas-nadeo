import fs from "fs/promises";
import path from "path";
import { HistoryCategory } from "@/types/history";

export async function writeHistory(
  game: string,
  history: Record<string, HistoryCategory[]>
) {
  const folder = path.join(
    process.cwd(),
    "data",
    "history",
    game
  );

  await fs.mkdir(folder, {
    recursive: true,
  });

  for (const [track, data] of Object.entries(history)) {
    await fs.writeFile(
      path.join(folder, `${track}.json`),
      JSON.stringify(data, null, 2)
    );
  }
}