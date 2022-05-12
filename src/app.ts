import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
//import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//app.use("/", recommendationRouter);

//app.use(errorHandlerMiddleware);

export default app;
