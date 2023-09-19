import Cart from "../models/Cart.js";

export default async (req, res, next) => {
  try {
    let { product_id, quantity } = req.body;

    let cart = await Cart.findOne({ user_id: req.user._id, product_id });

    //  console.log(cart);
    if (cart) {
      let quantityCart = cart.quantity + quantity;
      console.log("en carrito:", quantityCart);
      await Cart.findByIdAndUpdate(
        cart._id,
        {
          quantity: quantityCart,
        },
        { new: true }
      );

      return res.status(201).json({
        success: true,
        response: "Product added to cart!",
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
