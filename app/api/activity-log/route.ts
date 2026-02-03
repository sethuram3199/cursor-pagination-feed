import { generateActivityLogs } from "@/components/mock";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const logs = generateActivityLogs(30);

  return NextResponse.json({
    items: logs,
    nextCursor: null,
  });
}
