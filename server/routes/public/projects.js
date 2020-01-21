import { Router } from "express";
import {
  getProjectsNumber,
  getPageProjects,
  getSingleProject
} from "../../controllers/projects";

const router = Router();

router.get("/number/:type", getProjectsNumber);
router.get("/single/:id", getSingleProject);
router.get("/:page", getPageProjects);

module.exports = router;
