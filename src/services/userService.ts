import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
import {
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";
dotenv.config();

export type UserData = Omit<User, "id">;

async function signIn(loginData: UserData) {
  const user = await getUserOrFail(loginData);

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}

async function getUserOrFail(loginData: UserData) {
  const user = await userRepository.findByUser(loginData.user);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export default {
  signIn,
  findById,
};
