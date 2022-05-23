import { text } from "express";
import { string } from "joi";
import { prisma } from "../database.js";
import { Service } from "../services/servicesService.js"

async function create(service:Service) {

    return prisma.service.create({
        data: service
    });
}


async function findMany() {
    return await prisma.service.findMany();
}

async function findById(id: number) {
    return await prisma.service.findUnique({
        where:{
            id: id,
        },
    });
}



async function deleteService(id: number) {
    return await prisma.service.delete({
        where:{
            id: id,
        },
    })
}
export default {
    findMany,
    create,
    deleteService,
    findById,
}