import { fetchPage } from "./fetch";
import { TMX_SITES, TMXGame } from "./config";

export async function searchTrack(
  game: TMXGame,
  query: string
): Promise<string> {
  const base = TMX_SITES[game];

  const url =
    `${base}/tracksearch?query=${encodeURIComponent(query)}`;

  console.log(`Searching ${query}...`);
  console.log(url);

  return await fetchPage(url);
}