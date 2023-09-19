import { Schema, model } from "mongoose";

let collection = "states";

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    state: { type: Number, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

const State = model(collection, schema);
export default State;
