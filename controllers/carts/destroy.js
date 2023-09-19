import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    let query = { user_id: req.user._id };
    let del = await Cart.deleteMany(query);

    if (del) {
      return res.status(200).json({
        success: true,
        message: "Cart removed from User.",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Cart not removed from User.",
      });
    }
  } catch (error) {
    next(error);
  }
}
