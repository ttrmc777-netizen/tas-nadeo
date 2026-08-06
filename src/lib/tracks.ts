import { getGame } from "./games";

export async function getTracks(game: string) {
  const data = await getGame(game);

  return data;
}

export async function getTrack(game: string, trackId: string) {
  const tracks = await getTracks(game);

  return tracks.find((track: any) => track.id === trackId);
}