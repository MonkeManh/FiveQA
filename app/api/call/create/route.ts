import { createCall } from "@/services/callService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body) {
    return new NextResponse("Invalid request body", { status: 400 });
  }
  const newCase = body.case_entry;
  if (!newCase) {
    return new NextResponse("Case entry is required", { status: 400 });
  }

  const success = await createCall(newCase);
  if (success) {
    return NextResponse.json({ callNumber: success }, { status: 201 });
  } else {
    return new NextResponse("Failed to create call", { status: 500 });
  }
}
