import { Router } from "express";
import { checkAdminPermission } from "../../controllers/permission";
import {
  createEdu,
  getCurrentEdu,
  retrieveFieldsToUpdate,
  updateEdu,
  deleteEdu
} from "../../controllers/education";

const router = Router();

/**
 * @method POST
 * @access private - admin
 * @description create new education item
 */
router.post("/", checkAdminPermission, createEdu);

/**
 * @method PUT
 * @access private - admin
 * @description update education item data
 */
router.put(
  "/",
  checkAdminPermission,
  getCurrentEdu,
  retrieveFieldsToUpdate,
  updateEdu
);

/**
 * @method DELETE
 * @access private - admin
 * @description remove education item by id
 */
router.delete("/:id", checkAdminPermission, deleteEdu);

module.exports = router;
