import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL, // Ensure this line is present
  },
  schema: './db/schema/index.ts',
  out: './db/migrations',
});
