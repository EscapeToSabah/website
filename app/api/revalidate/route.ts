import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { SHEET_CACHE_TAG } from "../../../lib/sheets";

/**
 * Hit this after editing the Google Sheet to make the new content show
 * up immediately, instead of waiting for the 5-minute safety-net
 * refresh in lib/sheets.ts.
 *
 * GET /api/revalidate?secret=YOUR_SECRET
 *
 * Bookmark that URL for manual use, or wire it to a Google Apps Script
 * onEdit trigger on the sheet for fully automatic updates (see README).
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { revalidated: false, message: "REVALIDATE_SECRET is not set on the server." },
      { status: 500 }
    );
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret." }, { status: 401 });
  }

  // Next 16 requires a cacheLife profile as the second argument;
  // { expire: 0 } means "treat this tag's cached data as expired now".
  revalidateTag(SHEET_CACHE_TAG, { expire: 0 });

  return NextResponse.json({ revalidated: true, tag: SHEET_CACHE_TAG, now: Date.now() });
}
