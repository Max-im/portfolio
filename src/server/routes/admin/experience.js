import { Router } from "express";
import { checkAdminPermission } from "../../controllers/permission";
import {
  createExp,
  getCurrentExp,
  retrieveFieldsToUpdate,
  updateExp,
  deleteExp
} from "../../controllers/experience";

const router = Router();

/**
 * @method POST
 * @access private - admin
 * @description get all experience items
 */
router.post("/", checkAdminPermission, createExp);

/**
 * @method PUT
 * @access private - admin
 * @description update experience item
 */
router.put(
  "/",
  checkAdminPermission,
  getCurrentExp,
  retrieveFieldsToUpdate,
  updateExp
);

/**
 * @method DELETE
 * @access private - admin
 * @description delete experience item by id
 */
router.delete("/:id", checkAdminPermission, deleteExp);

module.exports = router;
