import { Router } from "express";
import{ validateGetProjectsNumber, validateGetProjects, validateGetSingleProject} from '../../validation/projects'
import {
  getProjectsNumber,
  getPageProjects,
  getSingleProject
} from "../../controllers/projects";


const router = Router();

router.get("/number", validateGetProjectsNumber, getProjectsNumber);
router.get("/single/:id", validateGetSingleProject, getSingleProject);
router.get("/:page", validateGetProjects, getPageProjects);

module.exports = router;
