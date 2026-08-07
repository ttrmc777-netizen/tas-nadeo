import { GoogleSheet } from "./types";

export function inspectSheet(sheet: GoogleSheet) {
  console.log("========== SHEET INFO ==========\n");

  console.log(`Columns: ${sheet.table.cols.length}`);
  console.log(`Rows: ${sheet.table.rows.length}`);

  console.log("\n========== FIRST 20 ROWS ==========\n");

  for (let i = 0; i < Math.min(40, sheet.table.rows.length); i++) {
    const row = sheet.table.rows[i];

    const values = row.c.map((cell) => {
      if (!cell) return "";
      return cell.f ?? cell.v ?? "";
    });

    console.log("--------------------------------");
console.log(`ROW ${i}`);
console.table(values);
  }
}