import { Router } from "express";
import projects from "./projects";
import auth from "./auth";
import skills from "./skills";

const router = Router();
router.use("/projects", projects);
router.use("/auth", auth);
router.use("/skills", skills);

module.exports = router;
