import client from "../db";

export const checkAdminPermission = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) throw new Error("Not authorized");
  const { gid } = JSON.parse(authorization);
  if (!gid) throw new Error("Not authorized");

  client.query("SELECT * FROM users WHERE gid=$1", [gid]).then(({ rows }) => {
    if (rows.length === 0) throw new Error("Not authorized");
    else {
      if (rows[0].isadmin === false) throw new Error("Access denied");
      else next();
    }
  });
};
