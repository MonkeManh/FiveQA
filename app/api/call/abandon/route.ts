import { pool } from "@/lib/database";
import { getServerUser } from "@/services/authService";
import { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
  const body = await request.json();
  if (!body || !body.run_number) {
    return new NextResponse("Invalid request body", { status: 400 });
  }

  const user = await getServerUser();
  if (!user) {
    return new NextResponse("User not authenticated", { status: 401 });
  }

  if (user.account_status !== "active") {
    return new NextResponse("User account is not active", { status: 403 });
  }

  const runNumber = body.run_number;

  //   Check if the run number exists in the database
  const sql = `SELECT * FROM calls WHERE run_number = ?`;
  const [rows] = await pool.query(sql, [runNumber]);
  //   If there is no rows or there are multiple rows, return an error
  if ((rows as any[]).length === 0) {
    return new NextResponse("Run number not found", { status: 404 });
  } else if ((rows as any[]).length > 1) {
    return new NextResponse("Multiple calls found with the same run number", {
      status: 500,
    });
  }

  //   Ensure that the call.created_by matches the user.id
  const call = (rows as any[])[0];
  if (call.created_by !== user.id) {
    return new NextResponse("You are not authorized to abandon this case", {
      status: 403,
    });
  }

  // Ensure the case is listed as active
  if (call.status !== "active") {
    return new NextResponse("Call is not active or already abandoned", {
      status: 400,
    });
  }

  //   Update the call status to abandoned
  const updateSql = `UPDATE calls SET status = 'abandoned' WHERE run_number = ?`;
  try {
    await pool.query(updateSql, [runNumber]);
    console.log("Call abandoned successfully with run number:", runNumber);
    return NextResponse.json(
      { message: "Call canceled successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error abandoning call:", error);
    return new NextResponse("Failed to abandon call", { status: 500 });
  }
}
