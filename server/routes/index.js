import { Router } from "express";

import auth from "./public/auth";
import contacts from "./public/contacts";
import skills from "./public/skills";
import education from "./public/education";
import experience from "./public/experience";
import summary from "./public/summary";
import projects from "./public/projects";
import comment from "./public/comment";
import photo from "./public/photo";
import social from "./public/social";
import resume from "./public/resume";

import adminContacts from "./admin/contacts";
import adminSkills from "./admin/skills";
import adminEducation from "./admin/education";
import adminSummary from "./admin/summary";
import adminExperience from "./admin/experience";
import adminProjects from "./admin/projects";

const router = Router();

// public and auth rotes
router.use("/auth", auth);
router.use("/social", social);
router.use("/photo", photo);
router.use("/contacts", contacts);
router.use("/skills", skills);
router.use("/education", education);
router.use("/summary", summary);
router.use("/experience", experience);
router.use("/projects", projects);
router.use("/comment", comment);
router.use("/resume", resume);

// admin routes
router.use("/admin/contacts", adminContacts);
router.use("/admin/skills", adminSkills);
router.use("/admin/education", adminEducation);
router.use("/admin/summary", adminSummary);
router.use("/admin/experience", adminExperience);
router.use("/admin/projects", adminProjects);

module.exports = router;
