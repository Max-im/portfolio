import { Router } from "express";
import {
  getProjectsNumber,
  getPageProjects,
  getComments,
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
router.get("/number/:type", getProjectsNumber);

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/single/:id", getProjectById, parseProjectData);

/**
 * @method GET
 * @access public
 * @description get batch of the particular project comments by id and step
 */
router.get("/comments/:project_id/:step", getComments);

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

router.get("/:page", getPageProjects);

module.exports = router;
