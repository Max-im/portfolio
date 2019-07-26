import { Router } from "express";
import {
  getPageProjects,
  retrieveQuery,
  getProjectsNumber,
  getAllProjects,
  formateAllProjects,
  getProjectLikes,
  getProjectById,
  parseProjectData
} from "../../controllers/projects";
import { checkAuthPermission } from "../../controllers/permission";
import { addNewLike, removeLike, toggleLike } from "../../controllers/likes";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get number of projects
 */
router.get("/number", retrieveQuery, getProjectsNumber);

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/single/:id", getProjectById, parseProjectData);

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/single/:id", getProjectById, parseProjectData);

/**
 * @method POST
 * @access private - auth
 * @description likes management
 */
router.post("/likes", checkAuthPermission, addNewLike, removeLike, toggleLike);

/**
 * @method GET
 * @access public
 * @description get likes
 */
router.get("/likes/:project_id", getProjectLikes);

/**
 * @method GET
 * @access public
 * @description get all projects, attach skills, return to frontend
 */
router.get(
  "/:page",
  retrieveQuery,
  getPageProjects,
  getAllProjects,
  formateAllProjects
);

module.exports = router;
