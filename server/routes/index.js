import { Router } from "express";
import auth from "./public/auth";
import projects from "./public/projects";
import photo from "./public/photo";
import resume from "./public/resume";

const router = Router();

// public and auth rotes
router.use("/auth", auth);
router.use("/photo", photo);
router.use("/projects", projects);
router.use("/resume", resume);

// admin routes

module.exports = router;
