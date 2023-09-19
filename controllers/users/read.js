import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let all = await UserModel.find().select("-password");

    if (all) {
      return res.status(200).json({
        success: true,
        message: "users found successfully",
        response: all,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "users not founds",
        response: null,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: { error },
      response: null,
    });
  }
};
