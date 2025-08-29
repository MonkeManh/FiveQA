// lib/database.ts
import mysql, { Pool, RowDataPacket } from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

if (!DB_HOST || !DB_USER || !DB_NAME) {
  throw new Error(
    "Missing DB env vars: DB_HOST, DB_USER, DB_NAME (and DB_PASS/DB_PORT if required)."
  );
}

// Reuse the pool in dev to avoid exhausting connections on HMR
declare global {
  // eslint-disable-next-line no-var
  var __mysqlPool__: Pool | undefined;
}

const pool =
  global.__mysqlPool__ ??
  mysql.createPool({
    host: DB_HOST,
    port: DB_PORT ? Number(DB_PORT) : 3306,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // optional:
    // enableKeepAlive: true,
  });

if (process.env.NODE_ENV !== "production") global.__mysqlPool__ = pool;

export { pool };

// Convenience helper
export async function query<T extends RowDataPacket[]>(
  sql: string,
  params?: any[]
): Promise<T> {
  const [rows] = await pool.execute<T>(sql, params);
  return rows;
}
