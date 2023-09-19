import Product from "../../models/Product.js";

export default async (req, res, next) => {
    try {
        let one = await Product.create(req.body)
        return res.status(201).json({
            success: true,
            response: one,
            message: "Product created!"
        })
    } catch (error) {
        next(error)
    }
}