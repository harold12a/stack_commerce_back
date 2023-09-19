import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let payload = req.body;
    let user = await UserModel.create(payload);

    if (user) {
      return res.status(200).json({
        success: true,
        message: "user created successfully",
        response: user,
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
