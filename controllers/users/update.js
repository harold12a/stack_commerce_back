import UserModel from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let id = req.params.id;
    let payload = req.body;
    let update = await UserModel.findByIdAndUpdate({ _id: id }, payload).select(
      "-password"
    );

    if (update) {
      return res.status(200).json({
        success: true,
        message: "user updated successfully",
        response: update,
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
