import { acceptUserAgreement } from "@/services/userService";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body) {
    return new Response("Invalid request body", { status: 400 });
  }
  const { userId } = body;
  if (!userId) {
    return new Response("User ID is required", { status: 400 });
  }

  await acceptUserAgreement(userId);

  return new Response("User agreement accepted", { status: 200 });
}
