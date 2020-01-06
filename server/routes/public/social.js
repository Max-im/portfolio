import { Router } from "express";
import { returnSocial } from "../../controllers/social";

const router = Router();

router.get("/", returnSocial);

module.exports = router;
