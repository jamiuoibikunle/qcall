import { Request, Response } from "express";
import pool from "./database";

const migrateDB = {
  states: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE states (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, governor VARCHAR(255), deputy_governor VARCHAR(255), created_at TIMESTAMP DEFAULT NOW())"
    );

    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res.status(200).json({ status: true, message: "Table created" });
  },
  lgas: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE lgas (ID SERIAL PRIMARY KEY, state VARCHAR(255) NULL, name VARCHAR(255) NOT NULL UNIQUE, chairman VARCHAR(255), vice_chairman VARCHAR(255), secretary VARCHAR(255), created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name))"
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

export default migrateDB;
