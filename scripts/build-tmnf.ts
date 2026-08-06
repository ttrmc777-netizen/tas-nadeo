import fs from "fs/promises";
import path from "path";

type Track = {
  id: string;
  tasTime: string;
  saved: string;
  authors: string[];
  date: string;
};

async function main() {
  const tracks: Track[] = [];

  // سنضيف البيانات هنا لاحقًا.

  const output = path.join(
    process.cwd(),
    "data",
    "tmnf",
    "tracks.json"
  );

  await fs.writeFile(
    output,
    JSON.stringify(tracks, null, 2),
    "utf8"
  );

  console.log(`Saved ${tracks.length} tracks.`);
}

main();