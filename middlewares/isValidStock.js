import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

export default async (req, res, next) => {
  let { quantity } = req.body;

  let CartOne = await Cart.findById(req.params.id);
  if (CartOne) {
    let stockProduct = await Product.findById(CartOne.product_id);
    if (stockProduct.stock < quantity) {
      return res.status(400).json({
        success: false,
        response: null,
        message: "Quantity stock not avaliable.",
      });
    } else {
      next();
    }
  } else {
    return res.status(400).json({
      success: false,
      response: null,
      message: "Cart is not avaliable.",
    });
  }
};
