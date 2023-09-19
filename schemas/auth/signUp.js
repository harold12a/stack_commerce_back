import joi from "joi";

const schemaSignUp = joi.object({
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "Email is required!",
    "string.base": "Email is required!",
    "string.empty": "Email is required!",
    "string.email": "Invalid format email!",
  }),
  password: joi.string().required().min(8).alphanum().messages({
    "any.required": "Password is required!",
    "string.base": "Password is required!",
    "string.empty": "Password is required!",
    "string.min": "Password is too short!",
    "string.alphanum": "Password must be alphanum!",
  }),
  photo: joi.string().required().min(10).messages({
    "any.required": "Photo is required!",
    "string.base": "Photo is required!",
    "string.empty": "Photo is required!",
    "string.min": "Photo is too short!",
    "string.uri": "Photo must be an URL!",
  }),
  name: joi.string().required().min(10).messages({
    "any.required": "Name is required!",
    "string.base": "Name is required!",
    "string.empty": "Name is required!",
  }),
  
  address: joi.string().required().min(10).messages({
    "any.required": "Address is required!",
    "string.base": "Address is required!",
    "string.empty": "Address is required!",
  }),

  phone: joi.string().required().min(10).messages({
    "any.required": "Phone is required!",
    "string.base": "Phone is required!",
    "string.empty": "Phone is required!",
  }),
  
});

export default schemaSignUp;
