export const catchErrors = (fn) => (req, res, next) => {
  return fn(req, res, next).catch(next);
};

const errMessages = {
  401: 'You must login first',
  403: 'Access forbidden',
  500: 'Network error',
};

export const errorHandler = (err, req, res, next) => {
  const status = err || 500;
  const errorMessage = errMessages[err];
  res.status(status).json(errorMessage);
  return next();
};
