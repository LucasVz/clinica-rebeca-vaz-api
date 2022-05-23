import { Request, Response } from "express";
import servicesService from "../services/servicesService.js";

async function createService(req: Request, res: Response) {
    const service = req.body;
    console.log(req.body, req.file)
    await servicesService.createService(service);
}

async function getServices(req: Request, res: Response) {
    const service = await servicesService.getServices();
    res.send({service})
}

async function getServiceById(req: Request, res: Response) {
    const  getId  = req.params.id
    const id = Number(getId)
    const service = await servicesService.getServiceById(id);
    res.send({service})
}

async function deleteService(req: Request, res: Response) {
    const  getId  = req.params.id
    const id = Number(getId)
    const service = await servicesService.deleteService(id);
    res.send(service)
}


export default {
    createService,
    getServices,
    deleteService,
    getServiceById
};
