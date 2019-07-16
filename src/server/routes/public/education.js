import { Router } from "express";
import { getAllEdu } from "../../controllers/education";

const router = Router();

/**
 * @method GET
 * @access public
 * @description return all education items
 */
router.get("/", getAllEdu);

module.exports = router;
