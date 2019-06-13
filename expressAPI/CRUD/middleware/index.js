module.exports = {
  isAdmin: (req, res, next) => {
    if (req.headers.authorization === "admin") return next();
    else res.status(401).send("User not authorized");
  },
  isClient: (req, res, next) => {
    if (req.headers.authorization) return next();
    else res.status(401).send("User not authorized");
  }
};
