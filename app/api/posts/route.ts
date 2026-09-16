import { NextResponse } from "next/server";
import { posts } from "@/content/posts";

/** The landing page shows the three most recent posts. */
const LIMIT = 3;

export async function GET() {
  const latest = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, LIMIT);

  return NextResponse.json(
    { posts: latest },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
  );
}
