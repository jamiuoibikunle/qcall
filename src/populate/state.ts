import { Request, Response } from "express";
import pool from "../../config/database";
import states from "../../public/states";

const state = async (req: Request, res: Response) => {
  const items: string[] = [];
  try {
    for await (const state of states) {
      const duplicate = await pool.query(
        "SELECT * FROM states WHERE name = $1",
        [state]
      );
      if (duplicate.rows.length > 0) continue;

      const result = await pool.query("INSERT INTO states (name) VALUES ($1)", [
        state,
      ]);
      items.push(state);
    }

    return res.status(200).json({ status: true, results: items });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default state;
