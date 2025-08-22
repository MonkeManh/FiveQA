import mysql from "mysql2/promise";

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const createPool = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
    });
    return connection;
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;
  }
};

const pool = await createPool();

export default pool;
