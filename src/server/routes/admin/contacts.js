import { Router } from "express";
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

module.exports = router;
