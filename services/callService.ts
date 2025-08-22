import pool from "@/lib/database";
import { getServerUser } from "./authService";

export async function createCall(newCase: any): Promise<string> {
  const user = await getServerUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  if (user.account_status !== "active") {
    throw new Error("User account is not active");
  }

  const runNumber = await getNextRunNumber();
  if (!runNumber) {
    throw new Error("Failed to generate run number");
  }

  const sql = `INSERT INTO calls (run_number, created_by, service, status, case_entry) VALUES (?, ?, ?, ?, ?)`;
  const values = [
    runNumber,
    user.id,
    newCase.service || "unknown",
    "active",
    JSON.stringify(newCase),
  ];
  try {
    await pool.query(sql, values);
    console.log("Call created successfully with run number:", runNumber);
  } catch (error) {
    console.error("Error creating call:", error);
    throw new Error("Failed to create call");
  }

  return runNumber;
}

// export async function cancelCase(runNumber: string): Promise<boolean> {

// }

// Run numbers are in YY-XXXXXX format
// We need to find the highest run number for the current year and increment it by 1
// If there are no run numbers for the current year, we start with YY-000001
// If the next run number exceeds 999999, we throw an error
// If the last run number is a different year, we reset to YY-000001
export async function getNextRunNumber(): Promise<string> {
  const sql = `SELECT run_number FROM calls ORDER BY run_number DESC LIMIT 1`;
  const [rows] = await pool.query(sql);
  const currentYear = new Date().getFullYear() % 100;
  let nextRunNumber = 1;
  if ((rows as any[]).length > 0) {
    const lastRunNumber = (rows as any[])[0].run_number;
    const [lastYearStr, lastNumberStr] = lastRunNumber.split("-");
    const lastYear = parseInt(lastYearStr, 10);
    const lastNumber = parseInt(lastNumberStr, 10);
    if (lastYear === currentYear) {
      nextRunNumber = lastNumber + 1;
      if (nextRunNumber > 999999) {
        throw new Error("Run number limit exceeded for the year");
      }
    }
  } else {
    nextRunNumber = 1;
  }
  const nextRunNumberStr = String(nextRunNumber).padStart(6, "0");
  return `${String(currentYear).padStart(2, "0")}-${nextRunNumberStr}`;
}
