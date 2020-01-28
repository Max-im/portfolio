export const catchErrors = fn => (req, res, next) => {
  return fn(req, res, next).catch(next);
};

export const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(400).json({ error: err });
  return next();
};
