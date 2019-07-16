import { Router } from "express";
import {
  getCategories,
  getSkills,
  formateSkills
} from "../../controllers/skills";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all skills
 */
router.get("/", getCategories, getSkills, formateSkills);

module.exports = router;
