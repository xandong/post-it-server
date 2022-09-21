import { prisma } from "../db/PrismaClient";

export async function checkIfEmailUsed(email: string) {
  return await prisma.user.findFirst({ where: { email } });
}
