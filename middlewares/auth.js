module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token || token !== 'Bearer mysecrettoken') {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
  next();
};
