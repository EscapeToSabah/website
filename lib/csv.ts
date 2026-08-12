/**
 * Minimal, dependency-free CSV parser that correctly handles quoted
 * fields containing commas, newlines, and escaped ("") quotes -- all
 * of which show up in Google's gviz CSV export once a cell has a
 * paragraph of story content in it.
 */
export function parseCsv(csvText: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  const text = csvText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  // Flush the last field/row if the file doesn't end with a newline.
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/** Turns parsed CSV rows into an array of objects keyed by the header row. */
export function csvToObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length === 0) return [];
  const [header, ...body] = rows;
  const keys = header.map((h) => h.trim());
  return body.map((r) => {
    const obj: Record<string, string> = {};
    keys.forEach((key, idx) => {
      obj[key] = (r[idx] ?? "").trim();
    });
    return obj;
  });
}
