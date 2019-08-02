import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/:name", (req, res) => {
  fs.readFile(`uploads/${req.params.name}`, (err, data) => {
    if (err) {
      fs.readFile("uploads/noimg.jpg", (error, noimg) => {
        if (error) return res.status(400).json(error);
        return res.write(noimg);
      });
    }
    res.write(data);
  });
});

module.exports = router;
