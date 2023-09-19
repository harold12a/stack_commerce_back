import { Router } from "express";
import create from "../controllers/carts/create.js";
import read from "../controllers/carts/read.js";
import update from "../controllers/carts/update.js";
import destroy_one from "../controllers/carts/destroy_one.js";
import isValidStock from "../middlewares/isValidStock.js";
import destroy from "../controllers/carts/destroy.js";
import inventary from "../middlewares/inventary.js";
import cartExists from "../middlewares/cartExists.js";
import buy from "../controllers/carts/buy.js";

let cartRouter = Router();

cartRouter.get("/", read);
cartRouter.post("/", inventary, cartExists, create);
cartRouter.put("/",  buy);
cartRouter.put("/:id", isValidStock, update);
cartRouter.delete("/", destroy);
cartRouter.delete("/:id", destroy_one);

export default cartRouter;
