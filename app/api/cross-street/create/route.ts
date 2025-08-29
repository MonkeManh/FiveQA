import { getServerUser } from "@/services/authService";
import { createNewCrossStreets } from "@/services/dataService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const user = await getServerUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });
  const body = await request.json();
  if (!body) {
    return new NextResponse("Invalid request body", { status: 400 });
  }
  const street = body.street;
  const newCrosses = body.crossingStreets;
  if (!street || !newCrosses) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  const success = await createNewCrossStreets(street, newCrosses, user);
  if (success) {
    return NextResponse.json({ success: success }, { status: 201 });
  } else {
    return new NextResponse("Failed to create street", { status: 500 });
  }
}
