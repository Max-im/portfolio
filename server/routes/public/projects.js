import { Router } from "express";
import{ validateGetProjectsNumber, validateGetProjects} from '../../validation/projects'
import {
  getProjectsNumber,
  getPageProjects,
  getSingleProject
} from "../../controllers/projects";


const router = Router();

router.get("/number", validateGetProjectsNumber, getProjectsNumber);
router.get("/single/:id", getSingleProject);
router.get("/:page", validateGetProjects, getPageProjects);

module.exports = router;
