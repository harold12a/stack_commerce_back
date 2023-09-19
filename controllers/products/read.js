import Product from "../../models/Product.js"

export default async (req, res, next) => {
    try {
        let all = await Product.find()
        if ( all.length ) {
            return res.status(200).json({
                success: true,
                response: all,
                message: "Products found!"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Products not found!"
        })
    } catch (error) {
        next(error)
    }
}