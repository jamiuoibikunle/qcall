import { Request, Response } from "express";
import pool from "../../config/database";

const fireservice = async (req: Request, res: Response) => {
  try {
    const results = await pool.query("SELECT * FROM lgas");
    const lgas = results.rows;

    lgas.map(async (item) => {
      await pool.query(
        "INSERT INTO fire_service (state, local_government) VALUES ($1, $2)",
        [item.state, item.name]
      );
    });

    return res
      .status(200)
      .json({ status: true, message: "Populated fire service" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default fireservice;
