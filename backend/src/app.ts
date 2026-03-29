import express from "express";
import applicationsRoutes from "./modules/applications/applications.routes";
import { pool } from "./config/db";

export const app = express();

app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true, database: true });
  } catch (error) {
    console.error("Healthcheck error", error);
    res.status(500).json({ ok: false, database: false });
  }
});

app.use("/applications", applicationsRoutes);