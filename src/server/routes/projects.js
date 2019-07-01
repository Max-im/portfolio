import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  attachSkills,
  attachComments
} from "../controllers/projects";
import client from "../db";

const router = Router();

/**
 * @method GET
 * @access public
 * @description get all projects, attach skills, return to frontend
 */
router.get("/", getAllProjects, attachSkills, (req, res) => {
  const { projectsWithSkills } = req.body;
  res.json(projectsWithSkills);
});

/**
 * @method GET
 * @access public
 * @description get cretain project by id, attach skills, attach comments, return to frontend
 */
router.get("/:id", getProjectById, attachSkills, attachComments, (req, res) => {
  const { projectsWithComments } = req.body;
  res.json(projectsWithComments);
});

/**
 * @method POST
 * @access private - admin
 * @description create new project
 */
router.post("/", async (req, res, next) => {
  const { author_id, picture, title, description, skills } = req.body;
  // create project
  const { rows } = await client
    .query(
      "INSERT INTO projects(author_id, picture, title, description) VALUES ($1,$2,$3,$4) RETURNING id",
      [author_id, picture, title, description]
    )
    .catch(err => next(err));

  const project_id = rows[0].id;

  for (const skill_id of skills) {
    await client
      .query(
        "INSERT INTO projects_skills(project_id, skill_id) VALUES ($1, $2)",
        [project_id, skill_id]
      )
      .catch(err => next(err));
  }

  res.end();
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  // delete projects_skills
  await client.query("DELETE FROM projects_skills WHERE project_id=$1", [id]);

  // delete comments
  await client.query("DELETE FROM comments WHERE project_id=$1", [id]);

  // delete project
  await client.query("DELETE FROM projects WHERE id=$1", [id]);

  res.end();
});

module.exports = router;
