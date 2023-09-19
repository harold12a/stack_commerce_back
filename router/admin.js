import { Router } from "express";
import read from "../controllers/admin/read.js";

let admiRouter = Router();

admiRouter.get("/cart", read);
/* admiRouter.post("/", inventary, cartExists, create);
admiRouter.put("/:id", isValidStock, update);
admiRouter.delete("/", destroy);
admiRouter.delete("/:id", destroy_one); */

export default admiRouter;
