import { getServerUser } from "@/services/authService";
import { createNewLocation } from "@/services/dataService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await getServerUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });
  const body = await request.json();
  if (!body) {
    return new NextResponse("Invalid request body", { status: 400 });
  }
  const newLoc = body.location;
  if (!newLoc) {
    return new NextResponse("Case entry is required", { status: 400 });
  }

  const success = await createNewLocation(newLoc, user);
  if (success) {
    return NextResponse.json({ callNumber: success }, { status: 201 });
  } else {
    return new NextResponse("Failed to create call", { status: 500 });
  }
}
