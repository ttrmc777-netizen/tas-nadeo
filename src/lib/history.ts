import fs from "fs/promises";
import path from "path";

import { HistoryCategory } from "@/types/history";

export async function getHistory(
  game: string,
  track: string
): Promise<HistoryCategory[]> {

  const filePath = path.join(
    process.cwd(),
    "data",
    "history",
    game.toLowerCase(),
    `${track}.json`
  );

  console.log("========== HISTORY ==========");
  console.log("Game:", game);
  console.log("Track:", track);
  console.log("Looking for:", filePath);

  try {
    const file = await fs.readFile(filePath, "utf8");

    console.log("History loaded successfully.");

    return JSON.parse(file);
  } catch (error) {
    console.error("Failed to load history:");
    console.error(error);

    return [];
  }
}