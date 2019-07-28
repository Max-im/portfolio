import { Router } from "express";
import { checkAuthPermission } from "../../controllers/permission";
import {
  createComment,
  returnSingleComment,
  checkIfUserIsAuthor,
  deleteComment
} from "../../controllers/comments";

const router = Router();

/**
 * create comment
 */
router.post("/", checkAuthPermission, createComment, returnSingleComment);

/**
 * delete comment
 */
router.delete("/:id", checkAuthPermission, checkIfUserIsAuthor, deleteComment);

module.exports = router;
