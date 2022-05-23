import { Router } from "express";
import servicesController from "../controllers/servicesController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import  multer  from "multer"
const upload = multer({dest: '../uploads/'});

const servicesRouter = Router();
 servicesRouter.post(
  "/services",upload.single("img")
  ,servicesController.createService
);

servicesRouter.get(
  "/services",
  servicesController.getServices
);

servicesRouter.get(
  "/services/:id",
  servicesController.getServiceById
);

servicesRouter.delete(
  "/services/:id",
  servicesController.deleteService
);


export default servicesRouter;
