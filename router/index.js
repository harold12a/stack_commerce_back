import { Router } from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";
import productsRouter from "./products.js";
import cartRouter from "./cart.js";
import categoriesRouter from './categories.js'
import paymentsRouter from "./payments.js";
import adminRouter from "./admin.js";
import passport from "../middlewares/passport.js";

const indexRouter = Router();

// indexRouter.get("/home", (req, res) => {
//   res.send("Test Router is Ok");
// });

indexRouter.use("/auth", authRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/categories", categoriesRouter);
indexRouter.use("/products", passport.authenticate('jwt',{ session:false }), productsRouter);
indexRouter.use("/cart", passport.authenticate('jwt',{ session:false }), cartRouter);
indexRouter.use('/payments', paymentsRouter);
indexRouter.use('/dashboard', passport.authenticate('jwt',{ session:false }), adminRouter);


export default indexRouter;