import { Router } from "express";
import {
  getAllProjects,
  formateAllProjects,
  getProjectById,
  parseProjectData
} from "../../controllers/projects";
import { checkAuthPermission } from "../../controllers/permission";
import { addNewLike, removeLike, toggleLike } from "../../controllers/likes";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all projects, attach skills, return to frontend
 */
router.get("/", getAllProjects, formateAllProjects, (req, res) => {
  res.json(req.body.result);
});

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/:id", getProjectById, parseProjectData, (req, res) => {
  res.json(req.body.result);
});

/**
 * @method POST
 * @access private - auth
 * @description likes management
 */
router.post("/likes", checkAuthPermission, addNewLike, removeLike, toggleLike);

module.exports = router;
