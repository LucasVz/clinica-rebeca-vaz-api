import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import usersRouter from  "./routes/usersRouter.js"
import servicesRouter from "./routes/servicesRouter.js"
import morgan from 'morgan';

//import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(usersRouter);
app.use(servicesRouter);
app.use(morgan('dev'));
app.use('/public', express.static("public"));


//app.use(errorHandlerMiddleware);

export default app;
