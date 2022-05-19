import { Request, Response } from "express";
import userService from "../services/userService.js";
import bcrypt from "bcrypt";

async function signIn(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.signIn(user);
  res.send({ token });
}

export default {
  signIn,
};
