import Cart from "../../models/Cart.js";
import State from "../../models/State.js";

export default async function (req, res, next) {
  try {
    const id = req.user._id;
    const { product_id, quantity } = req.body;
    const state = await State.findOne({ state: 1 });

    await Cart.create({
      user_id: id,
      state_id: state._id,
      product_id,
      quantity,
    });
    return res.status(201).json({
      success: true,
      response: "Product added to cart!",
    });
  } catch (error) {
    next(error);
  }
}
