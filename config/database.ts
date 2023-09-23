import { Pool } from "pg";
import dotenv from "dotenv";
import { readFileSync } from "fs";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: {
    ca: readFileSync("./src/config/global-bundle.pem").toString(),
  },
});

export default pool;
