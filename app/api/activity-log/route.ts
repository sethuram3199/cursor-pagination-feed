import { BASE_ACTIVITY_LOGS } from "@/components/mock";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    items: BASE_ACTIVITY_LOGS,
    nextCursor: null,
  });
}
