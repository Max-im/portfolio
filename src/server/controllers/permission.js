import jwt from "jsonwebtoken";
import client from "../db";

export const checkAdminPermission = (req, res, next) => {
  const { authorization } = req.headers;
  const error = { message: "Not authorized" };

  if (!authorization) res.status(401).json(error);

  const access_token = JSON.parse(authorization);
  jwt.verify(access_token, process.env.SECRET_OR_KEY, (err, { exp, sub }) => {
    if (err) return res.status(401).json(err);

    // check if the token doesnt expired
    console.log(exp * 1000 - Date.now());
    if (exp * 1000 < Date.now()) return res.redirect("/auth/logout");

    return client
      .query("SELECT * FROM users WHERE id=$1", [sub])
      .then(({ rows }) => {
        // check if the user exists
        if (!rows[0]) return res.redirect("/auth/logout");

        // check if the user is admin
        const { isadmin } = rows[0];
        if (!isadmin) return res.status(401).json(error);

        return next();
      })
      .catch(err => res.status(401).json(err));
  });
};

export const checkAuthPermission = (req, res, next) => {
  const { authorization } = req.headers;
  const error = { message: "Not authorized" };

  if (!authorization) res.status(401).json(error);

  const access_token = JSON.parse(authorization);
  jwt.verify(access_token, process.env.SECRET_OR_KEY, (err, { exp, sub }) => {
    if (err) return res.status(401).json(err);

    // check if the token doesnt expired
    if (exp * 1000 < Date.now()) return res.redirect("/auth/logout");

    return client
      .query("SELECT * FROM users WHERE id=$1", [sub])
      .then(({ rows }) => {
        // check if the user exists
        if (!rows[0]) return res.redirect("/auth/logout");
        return next();
      })
      .catch(err => res.status(401).json(err));
  });
};
