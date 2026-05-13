import { Request, Response } from "express";
import { applicationsService } from "./applications.service";

export const applicationsController = {
  async getAll(_req: Request, res: Response) {
    try {
      const applications = await applicationsService.getAll();
      res.json(applications);
    } catch (error) {
      console.error("applicationsController.getAll", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const application = await applicationsService.create(req.body);
      res.status(201).json(application);
    } catch (error) {
      console.error("applicationsController.create", error);

      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const application = await applicationsService.getById(req.params.id);
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }
      return res.json(application);
    } catch (error) {
      console.error("applicationsController.getById", error);

      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  },
};