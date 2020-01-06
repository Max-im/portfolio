import { Router } from "express";
import { getCategories, getSkills } from "../../controllers/skills";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all skills
 */
router.get("/", getSkills);

/**
 * @method GET
 * @access public
 * @description get all categories
 */
router.get("/categories", getCategories);

module.exports = router;
