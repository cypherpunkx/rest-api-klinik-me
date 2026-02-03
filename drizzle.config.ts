import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import config from "./src/config";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/models/*",
  dialect: "mysql",
  dbCredentials: {
    database: config.dbConfig.database,
    user: config.dbConfig.user,
    host: config.dbConfig.host,
    password: config.dbConfig.password,
    port: config.dbConfig.port,
  },
});
