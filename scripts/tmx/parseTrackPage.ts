export function parseTrackPage(trackId: number) {
  return {
    image: `https://tmnf.exchange/trackshow/${trackId}/image/1`,
    gbx: `https://tmnf.exchange/trackgbx/${trackId}`,
  };
}