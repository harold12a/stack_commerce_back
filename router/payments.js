import { Router } from "express";
import create from "../controllers/payments/create.js";

let paymentsRouter = Router();
paymentsRouter.post("/",create);

export default paymentsRouter;