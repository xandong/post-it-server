import { prisma } from "../../db/PrismaClient";

export async function isAuthenticated(id: string) {
  return await prisma.user.findFirst({ where: { id } });
}
