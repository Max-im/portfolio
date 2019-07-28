import client from "../db";

export const createComment = (req, res, next) => {
  const { project_id, author_id, text } = req.body;

  client
    .query(
      `INSERT INTO comments(project_id, author_id, text) 
        VALUES ($1, $2, $3) RETURNING id`,
      [project_id, author_id, text]
    )
    .then(({ rows }) => {
      console.log(rows);
      req.body.commentId = rows[0].id;
      return next();
    })
    .catch(err => res.status(400).json(err));
};

export const returnSingleComment = (req, res) => {
  const { commentId } = req.body;
  client
    .query(
      ` SELECT c.id AS id, date, avatar, author_id, text, project_id 
        FROM comments AS c 
        JOIN users AS u
        ON u.id = c.author_id 
        WHERE c.id=$1`,
      [commentId]
    )
    .then(({ rows }) => res.json(rows[0]))
    .catch(err => res.status(400).json(err));
};

export const checkIfUserIsAuthor = (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  client
    .query(`SELECT * FROM comments WHERE id=$1`, [id])
    .then(({ rows }) => {
      if (!user.isadmin && rows[0].author_id !== user.id) {
        return res.status(401).json({ message: "Permission denied" });
      }
      return next();
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

/**
 * @route PROJECT/DELETE
 * @description
 */
export const deleteComment = (req, res) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM comments 
        WHERE id=$1`,
      [id]
    )
    .then(() => res.end())
    .catch(err => res.status(400).json(err));
};
