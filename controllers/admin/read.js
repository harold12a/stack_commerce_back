import Cart from "../../models/Cart.js";
import State from "../../models/State.js";

export default async (req, res, next) => {
  try {
    let all = await Cart.find({})
      .populate("user_id", "name email address phone")
      .populate("product_id", "name price image")
      .populate("state_id", "name description state");

    return res.status(200).json({
      success: true,
      response: all,
    });
  } catch (error) {
    return next(error);
  }
};
