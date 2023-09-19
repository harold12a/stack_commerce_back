import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let payload = req.body;
    console.log(payload);
    let user = await UserModel.create(payload);

    if (user) {
      return res.status(200).json({
        success: true,
        messages: ["Account Registered Successfully!"],
        response: user,
      });
    }
  } catch (error) {
    next(error);
  }
};
