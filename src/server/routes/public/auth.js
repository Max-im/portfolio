import { Router } from "express";
import {
  getExistingUser,
  createNewUser,
  returnToken
} from "../../controllers/auth";

const router = Router();

router.post("/", getExistingUser, createNewUser, returnToken);

router.get("/logout");

module.exports = router;
