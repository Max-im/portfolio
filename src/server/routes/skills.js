import { Router } from "express";
import { checkAdminPermission } from "../controllers/permission";
import {
  getCategories,
  getSkills,
  formateSkills,
  createSkill,
  createCategory,
  getCurrentSkill,
  retrieveFieldsToUpdate,
  updateSkill,
  deleteCategorySkills,
  deleteCategory,
  deleteProjectSkills,
  deleteProjectSkillsByCategory,
  deleteSkill
} from "../controllers/skills";

import client from "../db";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all categories
 */
router.get("/", getSkills, formateSkills);

/**
 * @method GET
 * @access private - admin
 * @description get all categories
 */
router.get("/categories", checkAdminPermission, getCategories);

/**
 * @method GET
 * @access private - admin
 * @description get all skills no formated
 */
router.get("/admin", checkAdminPermission, getSkills, (req, res) => {
  res.json(req.body.skills);
});

/**
 * @method POST
 * @access private - admin
 * @description create new skill
 */
router.post("/", checkAdminPermission, createSkill);

/**
 * @method POST
 * @access private - admin
 * @description create new category
 */
router.post("/category", checkAdminPermission, createCategory);

/**
 *
 */
router.put(
  "/",
  checkAdminPermission,
  getCurrentSkill,
  retrieveFieldsToUpdate,
  updateSkill
);

/**
 * @method DELETE
 * @access private - admin
 * @description delete category and all related skills all project_skills
 */
router.delete(
  "/category/:id",
  checkAdminPermission,
  deleteProjectSkillsByCategory,
  deleteCategorySkills,
  deleteCategory
);

/**
 * @method DELETE
 * @access private - admin
 * @description delete skill by id and all project_skills
 */
router.delete("/:id", checkAdminPermission, deleteProjectSkills, deleteSkill);

module.exports = router;
