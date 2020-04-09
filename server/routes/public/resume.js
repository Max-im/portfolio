import { Router } from "express";
import { getAbout } from "../../controllers/about";
import { getSkills, getCategories } from "../../controllers/skills";
import { getExperience } from "../../controllers/experience";
import { getEducation } from "../../controllers/education";
import computeCV from '../../controllers/cv';

const router = Router();

router.get("/about", getAbout);

router.get("/skills", getSkills);

router.get("/skills-categories", getCategories);

router.get("/experience", getExperience);

router.get("/education", getEducation);

router.get("/cv", computeCV);

module.exports = router;
