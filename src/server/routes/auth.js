import { Router } from "express";
import { getExistingUser, createNewUser } from "../controllers/auth";

const router = Router();

/**
 * @description login user
 */
router.post("/", getExistingUser, createNewUser);

module.exports = router;
