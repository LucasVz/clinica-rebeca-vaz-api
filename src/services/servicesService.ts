import servicesRepositories from "../repositories/servicesRepository.js"
export interface Service {
    title: string,
    text: string,
    image: any,
}

async function createService(service:Service) {
    await servicesRepositories.create(service);
  
}

async function getServices() {
    return await servicesRepositories.findMany();
}

async function getServiceById(id: number) {
    return await servicesRepositories.findById(id);
}

async function deleteService(id: number) {
    return await servicesRepositories.deleteService(id);
}

export default {
    createService,
    getServices,
    deleteService,
    getServiceById,
};