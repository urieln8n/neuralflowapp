import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

// Esto carga las variables del archivo .env
dotenv.config();

export default defineConfig({
  schema: './packages/database/prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL,
  },
});