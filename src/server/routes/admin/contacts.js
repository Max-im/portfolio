import { Router } from "express";
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
    .query("DELETE FROM contacts WHERE id=$1", [id])
    .then(() => res.end())
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
  (req, res) => {
    const { contact_title, contact_value, contact_type, filename } = req.body;
    client
      .query(
        ` INSERT INTO 
        contacts(contact_title, contact_value, contact_type, contact_picture) 
        VALUES($1, $2, $3, $4) 
        RETURNING id, contact_title, contact_value, contact_type, contact_picture`,
        [contact_title, contact_value, contact_type, filename]
      )
      .then(({ rows }) => res.json(rows[0]))
      .catch(err => res.status(400).json(err));
  }
);

module.exports = router;
