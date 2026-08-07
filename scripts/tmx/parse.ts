import * as cheerio from "cheerio";

export interface SearchResult {
  id: number;
  name: string;
  author: string;
  url: string;
  image: string;
}

export function parseSearch(html: string): SearchResult | null {
  const $ = cheerio.load(html);

  // أول رابط يؤدي إلى صفحة Track
  const firstTrack = $('a[href*="/trackshow/"]').first();

  if (!firstTrack.length) {
    return null;
  }

  const href = firstTrack.attr("href") ?? "";

  const match = href.match(/trackshow\/(\d+)/);

  if (!match) {
    return null;
  }

  const id = Number(match[1]);

  const url = new URL(href, "https://tmnf.exchange").toString();

  const name =
    firstTrack.find("strong").text().trim() ||
    firstTrack.text().trim();

  const image =
    firstTrack.find("img").attr("src") ?? "";

  const author =
    firstTrack
      .closest(".card, tr, .track")
      .find('a[href*="/usershow/"]')
      .first()
      .text()
      .trim() || "";

  return {
    id,
    name,
    author,
    url,
    image,
  };
}