import { NextRequest, NextResponse } from "next/server";
import { generateActivityLogs } from "@/components/mock";

const TOTAL_LOGS = 500;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit")) || 10;
  const cursor = searchParams.get("cursor");

  const allLogs = generateActivityLogs(TOTAL_LOGS);

  const sortedLogs = allLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const filteredLogs = cursor
    ? sortedLogs.filter((log) => new Date(log.timestamp).getTime() < new Date(cursor).getTime())
    : sortedLogs;

  const items = filteredLogs.slice(0, limit);

  const nextCursor = items.length === limit ? items[items.length - 1].timestamp : null;

  return NextResponse.json({
    items,
    nextCursor,
  });
}
