import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";

function getEnv(key: string, defaultValue: any) {
  const value = process.env[key];

  if (value === undefined || value === "") {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
}

const dbConfig = {
  host: getEnv("DB_HOST", "localhost"),
  user: getEnv("DB_USER", "root"),
  password: getEnv("DB_PASSWORD", ""),
  port: getEnv("DB_PORT", 3000),
  database: getEnv("DB_NAME", "db_name"),
};

const poolConnection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  port: dbConfig.port,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const db = drizzle({ client: poolConnection });

export default {
  dbConfig,
  db,
};
