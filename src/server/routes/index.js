import { Router } from "express";
import projects from "./projects";
import auth from "./auth";

const router = Router();
router.use("/projects", projects);
router.use("/auth", auth);

module.exports = router;
