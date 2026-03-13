import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      // Aquí conectas con tu PostgreSQL usando variable de entorno
      // Asegúrate de que DATABASE_URL esté en tu .env
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;