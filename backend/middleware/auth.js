// Dummy middleware for authentication
export default function (req, res, next) {
  // In production, check JWT or session
  // req.user = decodedUser;
  next();
}