import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    let del = await Cart.findByIdAndDelete(req.params.id);

    if (del) {
      return res.status(200).json({
        success: true,
        message: "Product removed from Cart",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product is not removed from Cart",
      });
    }
  } catch (error) {
    next(error);
  }
}
