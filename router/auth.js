import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import getToken from "../middlewares/getToken.js";
import accountExistsSignIn from "../middlewares/accountSignIn.js";
import signInToken from "../controllers/auth/signInToken.js";
import passport from "../middlewares/passport.js";
import createHash from "../middlewares/createHash.js";
import signUp from "../controllers/auth/signUp.js";
import signout from "../controllers/auth/signout.js";
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js";
import validator from "../middlewares/validator.js";
import schemaSignUp from "../schemas/auth/signUp.js";
import schemaSignIn from "../schemas/auth/signIn.js";

let authRouter = Router();

authRouter.post(
  "/signup",
  validator(schemaSignUp),
  accountExistsSignUp,
  createHash,
  signUp
); // create user

authRouter.put('/signout', passport.authenticate('jwt', { session: false }), signout);
authRouter.post(
  "/signin", // endpoint
  validator(schemaSignIn), // validator schema
  accountExistsSignIn, // verify user exists
  isValidPassword, // compare password
  getToken, // get token user
  signIn // login
);

authRouter.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  getToken,
  signInToken
);

export default authRouter;
