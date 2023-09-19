import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    await Cart.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      response: "Product updated",
    });
  } catch (error) {
    next(error);
  }
}
