import { pool } from "../config/db.js";

export const createUrl = async (originalUrl, shortCode) => {
  const [rows] = await pool.execute(
    "INSERT INTO urls (original_url, short_code) VALUES (?, ?)",
    [originalUrl, shortCode],
  );
  return rows;
};

export const getUrlByCode = async (code) => {
  const [rows] = await pool.execute("SELECT * FROM urls WHERE short_code = ?", [
    code,
  ]);
  return rows[0];
};

export const incrementClicks = async (code) => {
  await pool.execute(
    "UPDATE urls SET clicks = clicks + 1 WHERE short_code = ?",
    [code],
  );
};
