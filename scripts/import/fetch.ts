import { getSheetUrl } from "./config";

export async function fetchSheet(gid: number): Promise<string> {
  console.log(`Downloading sheet (${gid})...`);

  const response = await fetch(getSheetUrl(gid));

  if (!response.ok) {
    throw new Error(
      `Failed to fetch sheet: ${response.status} ${response.statusText}`
    );
  }

  return await response.text();
}