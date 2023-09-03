import { Request, Response } from "express";
import pool from "../../config/database";
import data from "../../public/lgas";

const lgas = async (req: Request, res: Response) => {
  const items: {}[] = [];
  try {
    for await (const [key, value] of Object.entries(data)) {
      for (const item of value) {
        const duplicate = await pool.query(
          "SELECT * FROM lgas WHERE name = $1",
          [item]
        );
        if (duplicate.rows.length > 0) continue;

        const result = await pool.query(
          "INSERT INTO lgas (name, state) VALUES ($1, $2)",
          [item, key]
        );
        items.push({ state: key, lga: item });
      }
    }

    return res.status(200).json({ status: true, results: items });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default lgas;
