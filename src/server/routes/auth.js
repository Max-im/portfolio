import { Router } from "express";
import { getExistingUser, createNewUser } from "../controllers/auth";

const router = Router();

/**
 * Login
 */
router.post("/", getExistingUser, createNewUser);

module.exports = router;
