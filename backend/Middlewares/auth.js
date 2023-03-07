module.exports = (req, res, next) => {
  if (req.cookies !== undefined && req.cookies.Auth === "true") {
    req.isAuthenticated = true;
  } else {
    req.isAuthenticated = false;
  }
  next();
};
