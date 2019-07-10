import { Router } from "express";
import { checkAdminPermission } from "../controllers/permission";
import {
  getCategories,
  getSkills,
  formateSkills,
  createSkill,
  createCategory,
  getCurrentSkill,
  getCategoryId,
  retrieveFieldsToUpdate,
  updateSkill,
  deleteCategorySkills,
  deleteCategory,
  deleteProjectSkills,
  deleteProjectSkillsByCategory,
  deleteSkill
} from "../controllers/skills";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all categories
 */
router.get("/", getCategories, getSkills, formateSkills);

/**
 * @method GET
 * @access private - admin
 * @description get all categories
 */
router.get("/categories", checkAdminPermission, getCategories, (req, res) => {
  res.json(req.body.categories);
});

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
  "/category/:name",
  checkAdminPermission,
  getCategoryId,
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
