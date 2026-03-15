// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Evitar múltiples instancias en desarrollo (Next.js hot reload)
const globalForPrisma = global as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;