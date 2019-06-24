import { Router } from "express";
import projects from "./projects";
import auth from "./auth";
import skills from "./skills";
import contacts from "./contacts";

const router = Router();
router.use("/projects", projects);
router.use("/auth", auth);
router.use("/skills", skills);
router.use("/contacts", contacts);

module.exports = router;
