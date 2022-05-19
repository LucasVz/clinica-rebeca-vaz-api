import { prisma } from "../database.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findByUser(user: string) {
  return prisma.user.findUnique({
    where: {
      user,
    },
  });
}

export default {
  findByUser,
  findById,
};
