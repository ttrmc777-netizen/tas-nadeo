const API = "https://tmnf.exchange/api/tracks";

export async function getTrack(trackId: number) {
  const params = new URLSearchParams();

  params.set(
    "fields",
    [
      "TrackId",
      "TrackName",
      "Awards",
      "Uploader.UserId",
      "Uploader.Name",
      "AuthorTime",
      "UploadedAt",
    ].join(",")
  );

  params.set("id", trackId.toString());

  const res = await fetch(`${API}?${params.toString()}`, {
    headers: {
      Accept: "application/json",
    },
  });

  console.log("Status:", res.status);

  const text = await res.text();
  console.log(text);

  if (!res.ok) {
    throw new Error("TMX API Error");
  }

  const json = JSON.parse(text);

  if (!json.Results?.length) {
    return null;
  }

  return json.Results[0];
}