import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3001,
  dbUser: process.env.DB_USER || "postgres",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "job_tracker",
  dbPassword: process.env.DB_PASSWORD || "",
  dbPort: Number(process.env.DB_PORT) || 5432,
};