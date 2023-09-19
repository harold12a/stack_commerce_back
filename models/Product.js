import { Schema, Types, model } from 'mongoose'

let collection = 'products'

const schema = new Schema({
    category_id: { type: Types.ObjectId, ref: 'categories' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
    // is_active: { type: Boolean, required: true }
}, {
    timestamps: true
})

let Product = model(collection, schema)
export default Product