import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    database: "quickcall",
    user: "quickcall",
    password: "quickcall",
    port: 5432,
});

export default pool;
