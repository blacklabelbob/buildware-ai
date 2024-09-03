import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string, // Ensure this line is present and correctly typed
  },
  schema: './db/schema/index.ts',
  out: './db/migrations',
});
