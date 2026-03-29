import { Router } from "express";
import { applicationsController } from "./applications.controller";

const router = Router();

router.get("/", applicationsController.getAll);
router.post("/", applicationsController.create);

export default router;