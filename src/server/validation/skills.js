import fs from "fs";
import Validator from "validator";
import isEmpty from "./isEmpty";

const createSkillValidation = (req, res, next) => {
  const error = {};
  const skill = !isEmpty(req.body.skill) ? req.body.skill : "";
  const source = !isEmpty(req.body.source) ? req.body.source : "";
  const range = !isEmpty(req.body.range) ? req.body.range : "";
  const category_id = !isEmpty(req.body.category_id)
    ? req.body.category_id
    : "";
  const filename = !isEmpty(req.body.filename) ? req.body.filename : "";

  // skill
  if (!Validator.isLength(skill, { min: 1, max: 50 })) {
    error.skill = "Skill name must be between 10 and 50 characters";
  }

  // skill
  if (!Validator.isURL(source)) {
    error.source = "Invalid source, the field must be URL";
  }

  // range
  if (!Validator.isNumeric(range)) {
    error.range = "Invalid range value";
  }

  // category_id
  if (!Validator.isLength(category_id, { min: 1 })) {
    error.category_id = "category_id field must be at least 1 character";
  }

  // filename
  if (!Validator.isLength(filename, { min: 1 })) {
    error.filename = "filename field must be at least 1 character";
  }

  const filenameCreated = filename.split("-")[0];
  if (Date.now() - filenameCreated < 0 || Date.now() - filenameCreated > 5000) {
    return res.status(400).json("Creating error, try again later");
  }

  if (Object.keys(error).length === 0) return next();
  return fs.unlink(`uploads/${filename}`, err => {
    if (err) return res.status(400).json("Creating error, try again later");
    return res.status(400).json(error);
  });
};

module.exports = createSkillValidation;
