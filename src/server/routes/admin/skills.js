import { Router } from "express";
import { checkAdminPermission } from "../../controllers/permission";
import {
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
} from "../../controllers/skills";

const router = Router();

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
