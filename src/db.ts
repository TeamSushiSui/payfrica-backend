import { PrismaClient } from '@prisma/client'; // or '@prisma/client' if not custom generated path

const prisma = new PrismaClient();

export { prisma };