import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  attachSkills,
  attachComments
} from "../controllers/projects";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all projects, attach skills, return to frontend
 */
router.get("/", getAllProjects, attachSkills, (req, res) => {
  const { projectsWithSkills } = req.body;
  res.json(projectsWithSkills);
});

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/:id", getProjectById, attachSkills, attachComments, (req, res) => {
  const { projectsWithComments } = req.body;
  res.json(projectsWithComments);
});

module.exports = router;
