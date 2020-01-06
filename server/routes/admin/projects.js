import { Router } from "express";
import { upload, resizeProj } from "../../controllers/common";
import { checkAdminPermission } from "../../controllers/permission";
import {
  updateProjectData,
  retrieveSkillsToUpdate,
  addNewProjectSkills,
  removeOldProjectSkills,
  deleteProjectLikes,
  deleteProjectSkills,
  deleteProjectComments,
  deleteProject,
  createNewProject,
  attachSkillsToNewProject
} from "../../controllers/projects";

const router = Router();

/**
 * @method POST
 * @access private - admin
 * @description create new project, attach skills to the created project
 */
router.post(
  "/",
  checkAdminPermission,
  upload.single("picture"),
  resizeProj,
  createNewProject,
  attachSkillsToNewProject
);

/**
 * @method PUT
 * @access private - admin
 * @description update project data
 */
router.put(
  "/",
  checkAdminPermission,
  updateProjectData,
  retrieveSkillsToUpdate,
  addNewProjectSkills,
  removeOldProjectSkills,
  (req, res) => res.end()
);

/**
 * @method DELETE
 * @access private - admin
 * @description delete projects_skills, delete projects comments, delete certain project
 */
router.delete(
  "/:id",
  checkAdminPermission,
  deleteProjectLikes,
  deleteProjectSkills,
  deleteProjectComments,
  deleteProject,
  (req, res) => res.end()
);

module.exports = router;
