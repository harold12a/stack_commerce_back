import { Schema, Types, model } from 'mongoose'

let collection = 'categories'

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: 'users' },
}, {
    timestamps: true
})

const Category = model(collection, schema)
export default Category