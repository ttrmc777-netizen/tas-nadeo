import fs from "fs/promises";
import path from "path";

export async function getGame(game: string) {
  const filePath = path.join(
    process.cwd(),
    "data",
    game.toLowerCase(),
    "tracks.json"
  );

  const file = await fs.readFile(filePath, "utf8");

  return JSON.parse(file);
}