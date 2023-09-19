import { Schema, Types, model } from "mongoose";

let collection = "carts";

const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: "users" },
    product_id: { type: Types.ObjectId, ref: "products" },
    state_id: { type: Types.ObjectId, ref: "states" },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

let Cart = model(collection, schema);
export default Cart;
