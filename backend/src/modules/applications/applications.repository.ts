import { pool } from "../../config/db";
import { Application, CreateApplicationInput } from "./applications.types";

export const applicationsRepository = {
  async findAll(): Promise<Application[]> {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY created_at DESC"
    );

    return result.rows;
  },

  async create(data: CreateApplicationInput): Promise<Application> {
    const result = await pool.query(
      `INSERT INTO applications (
        company_name,
        job_title,
        contract_type,
        application_method,
        status,
        location,
        job_url,
        notes
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [
        data.company_name,
        data.job_title ?? null,
        data.contract_type ?? null,
        data.application_method,
        data.status,
        data.location ?? null,
        data.job_url ?? null,
        data.notes ?? null,
      ]
    );

    return result.rows[0];
  },
};