import jwt from "jsonwebtoken";
import "dotenv/config.js";

export default (req, res, next) => {
  const token = jwt.sign({ _id: req.user._id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  req.token = token;
  return next();
};
