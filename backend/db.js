require("dotenv").config();

const mysql = require("mysql2");

const host = process.env.DB_HOST || "localhost";
const isLocalHost = host === "localhost" || host === "127.0.0.1";
const useTLS = process.env.DB_SSL === "true" || !isLocalHost;

module.exports = mysql.createPool({
  host,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "management_kue_rifky",
  charset: "utf8mb4",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  ssl: useTLS ? { minVersion: "TLSv1.2" } : undefined
});
