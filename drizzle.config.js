import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url:'postgresqlURL'
  }
});