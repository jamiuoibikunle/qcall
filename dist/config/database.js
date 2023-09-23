"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = require("fs");
dotenv_1.default.config();
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
        ca: (0, fs_1.readFileSync)("./src/config/global-bundle.pem").toString(),
    },
});
exports.default = pool;
