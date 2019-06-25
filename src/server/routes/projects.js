import { Router } from "express";
import client from "../db";

const router = Router();

router.get("/", (req, res, next) => {
  client
    .query(
      `SELECT projects.id, title, description, picture, skill_picture 
              FROM projects 
              JOIN projects_skills ON projects_skills.project_id = projects.id 
              JOIN skills ON skills.id = projects_skills.skill_id`
    )
    .then(({ rows }) => {
      const result = {};
      rows.forEach(item => {
        if (!result[item.id])
          result[item.id] = { ...item, skill_picture: [item.skill_picture] };
        else result[item.id].skill_picture.push(item.skill_picture);
      });
      res.json(Object.keys(result).map(key => result[key]));
    })
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  client
    .query(
      `SELECT projects.id, title, description, picture, skill_picture 
              FROM projects 
              JOIN projects_skills ON projects_skills.project_id = projects.id 
              JOIN skills ON skills.id = projects_skills.skill_id 
              WHERE projects.id=$1`,
      [req.params.id]
    )
    .then(({ rows }) => {
      const result = {};
      rows.forEach(item => {
        if (!result[item.id])
          result[item.id] = { ...item, skill_picture: [item.skill_picture] };
        else result[item.id].skill_picture.push(item.skill_picture);
      });
      res.json(Object.keys(result).map(key => result[key])[0]);
    })
    .catch(err => next(err));
});

module.exports = router;
