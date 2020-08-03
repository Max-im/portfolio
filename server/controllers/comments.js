import db from '../db';

export const createComment = (req, res, next) => {
  const { projectId, userId, text } = req.body;

  db
    .query(
      `INSERT INTO comments(project_id, user_id, text) 
        VALUES ($1, $2, $3) RETURNING id`,
      [projectId, userId, text]
    )
    .then(({ rows }) => {
      req.body.commentId = rows[0].id;
      next();
    })
    .catch(next);
};

export const retunCommentById = (req, res) => {
  db
    .query(
      ` SELECT c.id AS id, date, avatar, user_id, text, project_id 
        FROM comments AS c 
        JOIN users AS u
        ON u.id = c.user_id 
        WHERE c.id=$1`,
      [req.body.commentId]
    )
    .then(({ rows }) => res.json(rows[0]))
    .catch((err) => res.status(400).json(err));
};

// export const checkIfUserIsAuthor = (req, res, next) => {
//   const { id } = req.params;
//   const { user } = req;
//   db
//     .query(`SELECT * FROM comments WHERE id=$1`, [id])
//     .then(({ rows }) => {
//       if (!user.isadmin && rows[0].author_id !== user.id) {
//         return res.status(401).json({ message: 'Permission denied' });
//       }
//       return next();
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// };

// /**
//  * @route PROJECT/DELETE
//  * @description
//  */
// export const deleteComment = (req, res) => {
//   const { id } = req.params;
//   db
//     .query(
//       `DELETE FROM comments 
//         WHERE id=$1`,
//       [id]
//     )
//     .then(() => res.end())
//     .catch((err) => res.status(400).json(err));
// };



export const getProjectComments = (req, res, next) => {
  db.query(
    `SELECT c.id, c.text, c.date, u.name, u.avatar 
    FROM comments AS c 
    JOIN users AS u
    ON u.id = c.user_id
    WHERE project_id = $1
    ORDER BY c.id DESC`,
    [req.params.id]
  )
    .then(({ rows }) => res.json(rows))
    .catch(next);
};