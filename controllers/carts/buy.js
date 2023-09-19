import Cart from "../../models/Cart.js";
import State from "../../models/State.js";

export default async function (req, res, next) {
  try {
    const queries = { user_id: req.user._id };
    const state = await State.findOne({ state: 2 });
    const all = await Cart.find(queries).populate(
      "product_id",
      "name price image"
    );

    const buyCart = all.map((product) => product._id);

    const changedState = buyCart.map(async (each) => {
      console.log(each);

      await Cart.findByIdAndUpdate(
        each,
        { state_id: state._id },
        { new: true }
      );
    });

    await Promise.all(changedState);

    return res.status(200).json({
      success: true,
      message: "Cart successfuly purchased",
    });
  } catch (error) {
    next(error);
  }
}
