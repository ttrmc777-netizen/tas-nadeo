async function testFields() {
  const url = "https://tmnf.exchange/api/tracks?id=2233";

  const res = await fetch(url);

  console.log("Status:", res.status);

  const text = await res.text();

  console.log(text);
}

testFields();