import Category from '../../models/Category.js'

export default async (req, res, next) => {
    try {
        let all = await Category.find().select("-cover_photo")
        if ( all ) {
            return res.status(200).json({
                success: true,
                response: all,
                message: "Categories found!"
            })
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Categories not found!"
        })
    } catch (error) {
        next(error)
    }
}