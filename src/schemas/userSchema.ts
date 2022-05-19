import Joi from "joi";
import { UserData } from "../services/userService";

export const userSchema = Joi.object<UserData>({
  user: Joi.string().required(),
  password: Joi.string().required(),
});
