import pool from "@/lib/database";
import { IUser } from "@/models/interfaces";

export async function doesUserExist(discordId: string): Promise<boolean> {
  const [rows] = await pool
    .query("SELECT 1 FROM users WHERE id = ? LIMIT 1", [discordId])
    .catch((error: any) => {
      console.error("Error checking if user exists:", error);
      return [];
    });
  return (rows as any[]).length > 0;
}

export async function createUser(
  discordID: string,
  username: string,
  avatar: string | null,
  email: string,
  verified: boolean
): Promise<void> {
  await pool.query(
    "INSERT INTO users (id, username, avatar, email, settings, verified, account_status, isInDiscord, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [discordID, username, avatar, email, null, verified, "tos", 0, 0]
  );
  return;
}

export async function getUserById(discordId: string): Promise<IUser | null> {
  const [rows] = await pool
    .query(
      "SELECT id, username, avatar, email, settings, verified, account_status, isInDiscord, isAdmin, created_at FROM users WHERE id = ? LIMIT 1",
      [discordId]
    )
    .catch((error: any) => {
      console.error("Error getting user by ID:", error);
      return [];
    });
  return (rows as any[])[0] || null;
}

export async function getUserSettings(discordId: string): Promise<any> {
  const [rows] = await pool
    .query("SELECT settings FROM users WHERE id = ? LIMIT 1", [discordId])
    .catch((error: any) => {
      console.error("Error getting user settings:", error);
      return [];
    });
  return (rows as any[])[0]?.settings || null;
}

export async function acceptUserAgreement(userId: string): Promise<void> {
  await pool.query("UPDATE users SET account_status = ? WHERE id = ?", [
    "active",
    userId,
  ]);
  return;
}

export async function updateUserEmail(
  discordId: string,
  email: string
): Promise<void> {
  await pool.query("UPDATE users SET email = ? WHERE id = ?", [
    email,
    discordId,
  ]);
  return;
}

export async function updateUserVerified(
  discordId: string,
  verified: number
): Promise<void> {
  await pool.query("UPDATE users SET verified = ? WHERE id = ?", [
    verified,
    discordId,
  ]);
  return;
}
