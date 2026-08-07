import * as cheerio from "cheerio";

async function main() {
  const trackId = 2233; // A01-Race

  const html = await fetch(
    `https://tmnf.exchange/trackshow/${trackId}`
  ).then((r) => r.text());

  const $ = cheerio.load(html);

  const scripts: string[] = [];

  $("script[src]").each((_, el) => {
    const src = $(el).attr("src");

    if (!src) return;

    scripts.push(
      src.startsWith("http")
        ? src
        : `https://tmnf.exchange${src}`
    );
  });

  console.log("\nScripts found:\n");

  for (const url of scripts) {
    console.log(url);
  }

  console.log("\n==============================\n");

  for (const url of scripts) {
    console.log("Scanning:", url);

    try {
      const js = await fetch(url).then((r) => r.text());

      const regex =
        /\/api\/[a-zA-Z0-9?=,._&-]+/g;

      const matches = js.match(regex);

      if (!matches) continue;

      console.log("\nAPI FOUND:\n");

      console.log([...new Set(matches)].join("\n"));

      console.log("\n---------------------\n");
    } catch {
      console.log("Failed.");
    }
  }
}

main();