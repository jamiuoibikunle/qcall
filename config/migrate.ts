import { Request, Response } from "express";
import pool from "./database";

const migrateDB = {
  users: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE users (ID SERIAL PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, date_of_birth DATE NOT NULL, gender VARCHAR(255), created_at TIMESTAMP DEFAULT NOW())"
    );

    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res
      .status(200)
      .json({ status: true, message: "User table created" });
  },
  states: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE states (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, governor VARCHAR(255), deputy_governor VARCHAR(255), created_at TIMESTAMP DEFAULT NOW())"
    );

    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res
      .status(200)
      .json({ status: true, message: "State table created" });
  },
  lgas: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE lgas (ID SERIAL PRIMARY KEY, state VARCHAR(255) NULL, name VARCHAR(255) NOT NULL UNIQUE, chairman VARCHAR(255), vice_chairman VARCHAR(255), secretary VARCHAR(255), created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name))"
    );

    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res.status(200).json({ status: true, message: "LGA table created" });
  },
  police: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE police (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255), state VARCHAR(255) NOT NULL, local_government VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name), FOREIGN KEY (local_government) REFERENCES lgas(name))"
    );
    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res
      .status(200)
      .json({ status: true, message: "Police table created" });
  },
  health: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE health (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255), state VARCHAR(255) NOT NULL, local_government VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name), FOREIGN KEY (local_government) REFERENCES lgas(name))"
    );
    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res
      .status(200)
      .json({ status: true, message: "Health table created" });
  },
  fireservice: async (req: Request, res: Response) => {
    const result = await pool.query(
      "CREATE TABLE fireservice (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255), state VARCHAR(255) NOT NULL, local_government VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name), FOREIGN KEY (local_government) REFERENCES lgas(name))"
    );
    if (!result)
      return res
        .status(400)
        .json({ status: false, message: "Error while creating table" });

    return res
      .status(200)
      .json({ status: true, message: "Fire service table created" });
  },
};

export default migrateDB;
