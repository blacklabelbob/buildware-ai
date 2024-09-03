import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    ssl: {
      rejectUnauthorized: false,  // Allows self-signed certificates
    },
  },
  schema: './db/schema/index.ts',
  out: './db/migrations',
});
