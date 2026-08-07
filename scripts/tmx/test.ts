async function main() {
  const params = new URLSearchParams();

  params.set(
    "fields",
    "TrackId,TrackName,Awards,Uploader.UserId,Uploader.Name,AuthorTime,UploadedAt"
  );
  params.set("count", "10");
  params.set("order1", "6");
  params.set("order2", "2");
  params.set("name", "A01");

  const res = await fetch(
    `https://tmnf.exchange/api/tracks?${params.toString()}`
  );

  console.log("Status:", res.status);

  const text = await res.text();
  console.log(text);
}

main().catch(console.error);