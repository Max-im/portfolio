import { Router } from "express";
import {
  checkAdminPermission,
  checkAuthPermission
} from "../controllers/permission";
import {
  getAllProjects,
  getProjectById,
  attachSkills,
  attachLikes,
  attachComments,
  deleteProjectSkills,
  deleteProjectComments,
  deleteProject,
  createNewProject,
  attachSkillsToNewProject
} from "../controllers/projects";

import { addNewLike, removeLike, toggleLike } from "../controllers/likes";
// import client from "../db";

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
router.get(
  "/:id",
  getProjectById,
  attachSkills,
  attachLikes,
  attachComments,
  (req, res) => {
    const { projectsWithComments } = req.body;
    res.json(projectsWithComments);
  }
);

/**
 * @method POST
 * @access private - admin
 * @description create new project, attach skills to the created project
 */
router.post(
  "/",
  checkAdminPermission,
  createNewProject,
  attachSkillsToNewProject,
  (req, res) => res.end()
);

/**
 * @method POST
 * @access private - auth
 * @description likes management
 */
router.post("/likes", checkAuthPermission, addNewLike, removeLike, toggleLike);

/**
 * @method DELETE
 * @access private - admin
 * @description delete projects_skills, delete projects comments, delete certain project
 */
router.delete(
  "/:id",
  checkAdminPermission,
  deleteProjectSkills,
  deleteProjectComments,
  deleteProject,
  (req, res) => res.end()
);

module.exports = router;
