import User from "../models/User.js";

export default async function accountExistsSignIn(req, res, next) {
  try {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      req.user = {
        _id: user?._id,
        email: user?.email,
        name: user?.name,
        photo: user?.photo,
        password: user?.password,
        role: user?.role,
      };
      return next();
    } else {
      return res.status(400).json({
        response: null,
        messages: ["Account does not exists!"],
      });
    }
  } catch (error) {
    next(error);
  }
}
