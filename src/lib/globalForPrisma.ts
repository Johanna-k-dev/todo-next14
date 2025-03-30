import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Log les requêtes SQL dans le terminal (optionnel)
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
