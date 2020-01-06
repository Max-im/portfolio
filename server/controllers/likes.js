import client from "../db";

export const addNewLike = (req, res, next) => {
  const { sign, project_id } = req.body;
  const { user } = req;
  client
    .query("SELECT * FROM likes WHERE user_id=$1 AND project_id=$2", [
      user.id,
      project_id
    ])
    .then(({ rows }) => {
      if (rows.length === 0) {
        client
          .query(
            `INSERT INTO likes(project_id, user_id, sign) 
                VALUES($1, $2, $3)`,
            [project_id, user.id, sign]
          )
          .then(() => res.end());
      } else next();
    });
};

export const removeLike = (req, res, next) => {
  const { sign, project_id } = req.body;
  const { user } = req;
  client
    .query(
      "SELECT id FROM likes WHERE user_id=$1 AND project_id=$2 AND sign=$3",
      [user.id, project_id, sign]
    )
    .then(({ rows }) => {
      if (rows.length === 1) {
        client
          .query("DELETE FROM likes WHERE id=$1", [rows[0].id])
          .then(() => res.end());
      } else next();
    });
};

export const toggleLike = (req, res, next) => {
  const { sign, project_id } = req.body;
  const { user } = req;
  client
    .query(
      "SELECT id FROM likes WHERE user_id=$1 AND project_id=$2 AND sign=$3",
      [user.id, project_id, !sign]
    )
    .then(({ rows }) => {
      if (rows.length === 1) {
        client
          .query("UPDATE likes SET sign=($1) WHERE id=$2", [sign, rows[0].id])
          .then(() => res.end());
      } else next();
    });
};
