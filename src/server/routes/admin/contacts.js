import { Router } from "express";
import fs from "fs";
import { upload, resize32 } from "../../controllers/common";
import client from "../../db";
import { checkAdminPermission } from "../../controllers/permission";

const router = Router();

/**
 * @description
 * @access private - Admin
 */
router.delete("/:id", checkAdminPermission, (req, res, next) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM contacts 
      WHERE id=$1 
      RETURNING contact_picture`,
      [id]
    )
    .then(({ rows }) => {
      fs.unlink(`uploads/${rows[0].contact_picture}`);
      res.end();
    })
    .catch(err => next(err));
});

/**
 * @description
 * @access private - Admin
 */
router.post(
  "/",
  checkAdminPermission,
  upload.single("contact_picture"),
  resize32,
  // validate
  (req, res) => {
    const { contact_title, contact_value, filename } = req.body;
    client
      .query(
        ` INSERT INTO 
          contacts(contact_title, contact_value, contact_picture) 
          VALUES($1, $2, $3) 
          RETURNING id, contact_title, contact_value, contact_picture`,
        [contact_title, contact_value, filename]
      )
      .then(({ rows }) => res.json(rows[0]))
      .catch(error => {
        fs.unlink(`uploads/${filename}`, err => err && console.log(err));
        return res.status(400).json(error);
      });
  }
);

module.exports = router;
