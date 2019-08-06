import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/:name", (req, res) => {
  const theRoot = { root: "uploads/" };
  const exist = fs.existsSync(`uploads/${req.params.name}`);

  if (exist) res.sendFile(`${req.params.name}`, theRoot);
  else res.sendFile("/noimg.jpg", theRoot);
});

module.exports = router;
