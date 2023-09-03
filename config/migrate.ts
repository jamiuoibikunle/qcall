import { Request, Response } from "express";
import pool from "./database";

const migrateDB = {
  states: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE states (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, deputy_governor VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL UNIQUE, created_at TIMESTAMP DEFAULT NOW())"
    );

    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res.status(200).json({ status: true, message: "Table created" });
  },
  police: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE police (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255) NOT NULL, state_id INT NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state_id) REFERENCES states(id))"
    );
    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res.status(200).json({ status: true, message: "Table created" });
  },
};

module.exports = migrateDB;
