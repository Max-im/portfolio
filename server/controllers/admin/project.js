import db from '../../db';

export const updateProjectSkills = async (req, res, next) => {
  const { id } = req.params;
  const { skills } = req.body;

  if (skills.deletedSkills && skills.deletedSkills.length) {
    await db
      .query(
        `DELETE FROM projects_skills
        WHERE project_id=${id} 
        AND skill_id IN(${skills.deletedSkills.join(', ')})`
      )
      .catch(next);
  }
  if (skills.newSkills && skills.newSkills.length) {
    const newSkillsQuery = skills.newSkills.map((skill) => `(${id}, ${skill})`);
    await db
      .query(
        `INSERT INTO projects_skills(project_id, skill_id)
        VALUES ${newSkillsQuery}`
      )
      .catch(next);
  }
  next();
};

export const updateProjectText = async (req, res, next) => {
  const { id } = req.params;
  const { params } = req.body;
  if (Object.keys(params).length) {
    const queryString = Object.keys(params)
      .map((key) => `${key}='${params[key]}'`)
      .join(', ');
    await db.query(`UPDATE projects SET ${queryString} WHERE id = ${id}`).catch(next);
  }
  res.end();
};

export const getProjectLevels = (req, res, next) => {
  db.query(`SELECT * FROM projectlevels`)
    .then(({ rows }) => res.json(rows))
    .catch(next);
};
