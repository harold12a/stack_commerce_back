import User from "../models/User.js";

export default async function accountExistsSignUp(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      response: null,
      messages: ["Account  Already Exists!"],
    });
  }
  return next();
}
