import Cart from "../../models/Cart.js";
import State from "../../models/State.js";

export default async function (req, res, next) {
  try {
    const state = await State.findOne({ state: 1 });
    let queries = { user_id: req.user._id, state_id: state };

    let all = await Cart.find(queries)
      .populate("product_id", "name price image")
      .populate("state_id", "name description state");

    return res.status(200).json({
      success: true,
      response: all,
    });
  } catch (error) {
    next(error);
  }
}
