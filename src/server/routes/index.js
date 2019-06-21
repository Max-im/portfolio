import { Router } from "express";
import projects from "./projects";

const router = Router();
router.use("/projects", projects);

module.exports = router;
