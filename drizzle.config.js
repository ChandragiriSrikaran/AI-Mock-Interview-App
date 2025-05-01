import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_O3qjwoUYz4nQ@ep-shy-rice-a8ibymf3.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require'
  }
});