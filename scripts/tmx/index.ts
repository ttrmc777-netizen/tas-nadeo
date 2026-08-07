import { getTrack } from "./getTrack";
import { getTrackPage } from "./getTrackPage";
import { parseTrackPage } from "./parseTrackPage";

async function main() {
  const track = await getTrack(2233);

  if (!track) {
    console.log("Track not found");
    return;
  }

  console.log(track);

  const page = parseTrackPage(track.TrackId);

console.log(page);
}

main().catch(console.error);