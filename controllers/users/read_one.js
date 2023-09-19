import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let id = req.params.id;
    let one = await UserModel.findById(id).select("-password");

    if (one) {
      return res.status(200).json({
        success: true,
        message: "users found successfully",
        response: one,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "user not found",
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
