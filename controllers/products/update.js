import Product from "../../models/Product.js";

export default async ( req,res,next ) => {
    try {
        let one = await Product.findByIdAndUpdate( req.params.id, req.body )
        if ( one ) {
            return res.status(200).json({
                success: true,
                response: one,
                message: "Product updated"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Product not updated"
        })
    } catch (error) {
        next(error)
    }
}