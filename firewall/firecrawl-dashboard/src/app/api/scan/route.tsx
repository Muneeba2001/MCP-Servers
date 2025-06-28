import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  // Dummy response for testing; replace with real scan logic later
  return NextResponse.json({
    findings: [
      { issue: "Open Directory", url: url + "/public" },
      { issue: "Exposed Admin Panel", url: url + "/admin" }
    ]
  });
}
