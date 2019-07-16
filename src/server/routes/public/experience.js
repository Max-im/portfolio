import { Router } from "express";
import { getAllExp } from "../../controllers/experience";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all experience items
 */
router.get("/", getAllExp);

module.exports = router;
