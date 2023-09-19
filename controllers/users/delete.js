import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let id = req.params.id;
    let del = await UserModel.findByIdAndDelete(id);

    if (del) {
      return res.status(200).json({
        success: true,
        message: "user delete successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "user not deleted",
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
