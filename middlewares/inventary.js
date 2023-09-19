import Product from "../models/Product.js";

export default async (req, res, next) => {
  let { product_id, quantity } = req.body;

  console.log("====================================");
  console.log(req.body);
  console.log("====================================");
  let StockProduct = await Product.findById(product_id);
  if (quantity === 0) {
    return res.status(400).json({
      success: false,
      response: null,
      message: "Quantity most be higher than 0.",
    });
  } else {
    if (quantity <= StockProduct.stock) {
      let stock = StockProduct.stock - quantity;
      await Product.findByIdAndUpdate(
        product_id,
        { stock: stock },
        { new: true }
      );
      next();
    } else {
      return res.status(400).json({
        success: false,
        response: null,
        message: "Quantity stock not avaliable.",
      });
    }
  }
};
