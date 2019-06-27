import { Router } from "express";
import client from "../db";
import {
  getAllProjects,
  getProjectById,
  attachSkillsToProject,
  returnProjects
} from "../controllers/projects";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all projects, attach skills data into the projects, return to frontend
 */
router.get("/", getAllProjects, attachSkillsToProject, returnProjects);

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills data into the project, return to frontend
 */
router.get("/:id", getProjectById, attachSkillsToProject, returnProjects);

module.exports = router;
