export async function getTrackPage(trackId: number) {
  const res = await fetch(
    `https://tmnf.exchange/trackshow/${trackId}`
  );

  if (!res.ok) {
    throw new Error("Couldn't load track page");
  }

  return await res.text();
}